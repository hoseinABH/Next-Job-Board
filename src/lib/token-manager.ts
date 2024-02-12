// Utilities
import Database from './database';

export type Token = string | null;

export class AuthorizationToken {
  public update(token: Token) {
    this.persist(token);
  }
  public getToken(): Token {
    return Database.read('token');
  }

  public clean(): void {
    Database.delete('token');
  }

  private persist(token: Token) {
    Database.store('token', token);
  }
}

export const TokenManager = new AuthorizationToken();
