type Key = string;
export type Read<T = any> = T;

export class LocalStorage {
  static store(key: Key, data: any, storage = window.localStorage): any {
    if (!window.localStorage || !key) {
      return;
    }
    storage.setItem(key, data);
  }

  static read(key: Key, storage = window.localStorage): Read<any> {
    if (!storage || !key) {
      return;
    }
    const item: any = storage.getItem(key);
    if (!item) {
      return;
    }
    const parse = JSON.parse;
    try {
      return parse(item);
    } catch (error) {
      return parse(`"${item}"`);
    }
  }

  static remove(key: Key, storage = window.localStorage): any {
    if (!storage || !key) {
      return;
    }
    storage.removeItem(key);
  }
}
