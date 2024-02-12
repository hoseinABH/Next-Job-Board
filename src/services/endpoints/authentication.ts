import HttpService from '../base';
// Types
import type { LoginDto } from '@/types/auth';

class AuthenticationProvider extends HttpService {
  constructor() {
    super({
      suffix: 'auth',
    });
  }
  public getPersonInfo(data: LoginDto) {
    return this.httpService.post('email/login', data);
  }
}

const AuthenticationService = new AuthenticationProvider();

export default AuthenticationService;
