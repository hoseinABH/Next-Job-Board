// Utilities
import { Token, TokenManager } from './token-manager';

export function readToken(): Token {
  return TokenManager.getToken();
}
export function storeToken(token: string) {
  TokenManager.update(token);
}
export function removeToken() {
  TokenManager.clean();
}
