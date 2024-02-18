import HttpService from '../base';
// Types
import type { LoggedInUserInfo, LoginDto, LoginResponse } from '@/types/auth';
import type { BaseApiResponse } from '@/types/http';

class AuthenticationProvider extends HttpService {
  constructor() {
    super({
      suffix: 'auth',
    });
  }
  public loginWithEmail(
    data: LoginDto
  ): Promise<BaseApiResponse<LoginResponse>> {
    return this.httpService.post('email/login', data);
  }
  public fetchMe(): Promise<BaseApiResponse<LoggedInUserInfo>> {
    return this.httpService.get('me');
  }
}

const AuthenticationService = new AuthenticationProvider();

export default AuthenticationService;
