// Utilities
import { isProduction } from './env';
import { LocalStorage } from './localStorage';
import { CryptoProvider } from './crypto';
import { isArray, isBoolean, isNumber, isObject } from './common';

type DatabaseResolver = 'memory' | 'runtime';
type DatabaseEvents = 'all' | 'store' | 'delete' | 'read' | 'clear' | 'update';
type DatabaseListenerCallback = (event: DatabaseChangesEvent) => void;
interface DatabaseChanges {
  key: string;
  value?: any;
}
interface DatabaseDecoder {
  value: any;
  resolver: DatabaseResolver;
}
interface DatabaseChangesEvent extends DatabaseChanges {
  encrypted: boolean;
  event: DatabaseEvents;
  resolver: DatabaseResolver;
}

interface DatabaseProviderOptions {
  enableEncryption?: boolean;
  secretKey?: string;
}
/**
 * Database class job is to crypt and decrypt everything we want to store or read from the LocalStorage
 *
 * @internal
 * @public
 */
class DatabaseProvider extends CryptoProvider {
  private keyToValue = new Map<string, any>();

  private keyToHash = new Map<string, string>();

  private events = new Map<DatabaseEvents, DatabaseListenerCallback>();

  private readonly shouldBeHashed: boolean = false;

  constructor(options: DatabaseProviderOptions = {}) {
    super();
    this.shouldBeHashed = options.enableEncryption ?? false;
    if (options.secretKey) {
      this.secretKey = options.secretKey;
    }
  }

  /**
   * Set a Key into database
   *
   * @public
   * @param key
   * @param value
   * @return string
   */
  public store(key: string, value: any) {
    try {
      const $value =
        isObject(value) || isArray(value) ? JSON.stringify(value) : value;

      if (this.shouldBeHashed) {
        const hashValue = this.hash($value);
        const hashKey = this.hashByVId(key);

        this.keyToValue.set(key, value);
        this.keyToHash.set(key, hashKey);

        LocalStorage.store(hashKey, hashValue);
      } else {
        this.keyToValue.set(key, value);
        LocalStorage.store(key, $value);
      }
      this.emit('store', {
        key,
        value,
        resolver: 'runtime',
      });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Get a key's value by its name from database
   *
   * @public
   * @param key
   * @return The key's value or undefined if the key hasn't exist
   */
  public read<T extends any>(key: string): T {
    try {
      const { value, resolver } = (this.decodeKey(key) as DatabaseDecoder) || {
        value: 'not-found',
        resolver: 'runtime',
      };

      this.emit('read', {
        key,
        value,
        resolver,
      });

      if (value === 'undefined' || value === undefined) {
        // @ts-ignore
        return undefined;
      } else if (value === 'null' || value === null) {
        this.keyToValue.set(key, null);

        // @ts-ignore
        return null;
      } else if (value === 'not-found') {
        throw `[Database] Not found ${key}`;
      }

      let result;
      if (
        isObject(value) ||
        isArray(value) ||
        isBoolean(value) ||
        isNumber(value)
      ) {
        result = value;
      } else {
        try {
          const parse = JSON.parse(value);
          result = (typeof parse !== 'object' ? JSON.parse(parse) : value) as T;
        } catch (e) {
          result = this.trim(value) as T;
        }
      }

      this.keyToValue.set(key, result);

      return result;
    } catch (e) {
      // @ts-ignore
      return undefined;
    }
  }

  /**
   * Delete an Item in Database
   *
   * @public
   * @param key
   * @return void
   */
  public delete(key: string): void {
    this.keyToValue.delete(key);
    if (this.shouldBeHashed) {
      const hashedKey = this.getHashedKey(key) ?? this.hashByVId(key);

      this.keyToHash.delete(key);

      LocalStorage.remove(hashedKey);
    } else {
      LocalStorage.remove(key);
    }
    this.emit('delete', {
      key,
      resolver: 'runtime',
    });
  }

  /**
   * Clear every single item that stored into the LocalStorage except of lang key
   *
   * @public
   * @param  options - browser Remove browser's storage
   * @return void
   */
  public clear({ browser }: { browser: boolean } = { browser: true }): void {
    // Clear the Local storage
    this.keyToHash.clear();
    this.keyToValue.clear();

    if (browser) {
      // Clear the Browser Storage
      localStorage.clear();
      sessionStorage.clear();
    }
    this.emit('clear');
  }

  /**
   * Size of current Storage system keys
   *
   * @public
   * @return number
   */
  public get size(): number {
    return window.localStorage.length;
  }

  /**
   * Size of decrypted and cached keys
   *
   * @public
   * @return number
   */
  public get cacheSize(): number {
    return this.keyToValue.size;
  }

  /**
   * Return the key's hash value
   *
   * @param key
   * @return hashed key's string
   */
  public getHashedKey(key: string) {
    return this.keyToHash.get(key);
  }

  /**
   * Decode and Decrypt local storage keys by a secure-key that we generated before by {@link uniqueUserIdentification}.
   *
   * @private
   * @param key
   */
  private decodeKey(key: string): DatabaseDecoder | undefined {
    if (this.keyToValue.has(key)) {
      return {
        value: this.keyToValue.get(key),
        resolver: 'memory',
      };
    } else {
      if (this.shouldBeHashed) {
        const hashKey = this.getHashedKey(key) ?? this.hashByVId(key);
        const readFromExternalDB = LocalStorage.read(hashKey);
        if (readFromExternalDB) {
          // Key is existing in the External DB such as LocalStorage
          const decrypted = this.decrypt(
            this.trim(readFromExternalDB),
            this.secretKey
          ) as string;
          if (decrypted || decrypted === null) {
            this.keyToValue.set(key, decrypted);

            return {
              value: decrypted,
              resolver: 'runtime',
            };
          }
        } // The Key is exists into db
      } else {
        this.keyToValue.set(key, LocalStorage.read(key));

        return {
          value: this.keyToValue.get(key),
          resolver: 'runtime',
        };
      }
    }
  }

  /**
   * Encrypt the string
   *
   * @private
   * @internal
   * @param str
   */
  private hash(str: string) {
    return this.encrypt(str, this.secretKey);
  }

  /**
   * Add an event listener to watch the Database changes
   *
   * @param event
   * @param callback
   */
  public addEventListener(
    event: DatabaseEvents,
    callback: DatabaseListenerCallback
  ): void {
    if (!this.events.has(event)) {
      this.events.set(event, callback);
    }
  }

  /**
   * Remove a created event watcher which created before by `Database.addEventListener`
   *
   * @param event
   */
  public removeEventListener(event: DatabaseEvents): void {
    this.events.delete(event);
  }

  /**
   * Emit the Event to the listener(watchers)
   *
   * @param {DatabaseEvents} event
   * @param {DatabaseChanges} details
   */
  private emit(
    event: DatabaseEvents,
    details?: Omit<DatabaseChangesEvent, 'event' | 'encrypted'>
  ) {
    const hasEvent = this.events.has(event);
    if (hasEvent || this.events.has('all')) {
      const callback = this.events.get(hasEvent ? event : 'all');

      if (callback) {
        // @ts-ignore
        callback({ ...details, event, encrypted: this.shouldBeHashed });
      }
    }
  }
}

const Database = new DatabaseProvider({
  enableEncryption: isProduction(),
  secretKey: process.env.AUTH_SECRET,
});
export default Database;
export { DatabaseProvider };
