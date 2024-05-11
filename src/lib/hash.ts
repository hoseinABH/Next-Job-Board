// Utilities
import AESCrypt from 'crypto-js/aes';
import MD5Crypt from 'crypto-js/md5';
import SHA1Crypt from 'crypto-js/sha1';
import { default as hmacSha1Crypt } from 'crypto-js/hmac-sha1';
// Encoding
import HexEncoding from 'crypto-js/enc-hex';
import UTF8Encoding from 'crypto-js/enc-utf8';

export const MD5 = (str: string): string => MD5Crypt(str).toString();
export const SHA1 = (str: string) => SHA1Crypt(str).toString(HexEncoding);
export const hmacSha1 = (str: string, secret: string) => hmacSha1Crypt(str, secret);
export const AesEncrypt = (str: string, salt: string): string =>
  AESCrypt.encrypt(str, salt).toString();
export const AesDecrypt = (hash: string, salt: string): string =>
  AESCrypt.decrypt(hash, salt).toString(UTF8Encoding);

export { HexEncoding, UTF8Encoding };
