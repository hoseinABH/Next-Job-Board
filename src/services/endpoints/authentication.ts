import HttpService from '../base';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  LoggedInUserInfo,
  LoginDto,
  LoginResponse,
  RegisterDto,
} from '@/types/auth';

class AuthenticationProvider extends HttpService {
  constructor() {
    super({
      suffix: 'auth',
    });
  }
  public loginWithEmail(
    data: LoginDto
  ): Promise<BaseApiResponse<LoginResponse>> {
    return this.httpService.post('login', data);
  }
  public registerWithEmail(data: RegisterDto): Promise<BaseApiResponse> {
    return this.httpService.post('register', data);
  }
  public fetchMe(): Promise<BaseApiResponse<LoggedInUserInfo>> {
    return this.httpService.get('me');
  }
}

const AuthenticationService = new AuthenticationProvider();

export default AuthenticationService;
