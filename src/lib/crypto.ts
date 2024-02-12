import { AesDecrypt, AesEncrypt, SHA1 } from './hash';

/**
 * An abstract class that it's job it to generate an unique user id for using as our secureKey and then crypt and decrypt everything by the Generated SecureKey
 *
 * @abstract
 */
abstract class CryptoProvider {
  protected secretKey: string;

  protected constructor() {
    this.secretKey = '';
  }

  protected validate(nextSecureKey: string): boolean {
    return this.compare(this.secretKey, this.trim(nextSecureKey));
  }

  protected trim(str: string): string {
    return `${str}`.replace(/"/g, '');
  }

  protected encrypt(str: string, secretKey: string): string {
    try {
      return AesEncrypt(JSON.stringify(str), this.trim(secretKey));
    } catch (e) {
      return '';
    }
  }

  protected decrypt(hash: string, secretKey: string): string | null {
    try {
      if (!hash || !secretKey) {
        return null;
      } else {
        return AesDecrypt(hash, this.trim(secretKey));
      }
    } catch (e) {
      return '';
    }
  }

  protected cryptSHA1(str: string): string {
    return SHA1(str);
  }

  protected hashByVId(str: string): string {
    return this.cryptSHA1(`${str}-${this.secretKey}`);
  }

  protected compare(a: string, b: string): boolean {
    return a === b;
  }
}

export { CryptoProvider };
