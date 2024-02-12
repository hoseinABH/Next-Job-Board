import HttpService from '../base';
// Types
import type { LoginDto, LoginResponse } from '@/types/auth';

class AuthenticationProvider extends HttpService {
  constructor() {
    super({
      suffix: 'auth',
    });
  }
  public loginWithEmail(data: LoginDto): Promise<LoginResponse> {
    return this.httpService.post('email/login', data);
  }
}

const AuthenticationService = new AuthenticationProvider();

export default AuthenticationService;
