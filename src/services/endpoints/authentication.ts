import HttpService from '../base';
// Types
import type { LoggedInUserInfo, LoginDto, LoginResponse } from '@/types/auth';

class AuthenticationProvider extends HttpService {
  constructor() {
    super({
      suffix: 'auth',
    });
  }
  public loginWithEmail(data: LoginDto): Promise<LoginResponse> {
    return this.httpService.post('email/login', data);
  }
  public fetchMe(): Promise<LoggedInUserInfo> {
    return this.httpService.get('me');
  }
}

const AuthenticationService = new AuthenticationProvider();

export default AuthenticationService;
