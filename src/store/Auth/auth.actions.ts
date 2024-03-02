/**
 * @module Actions/AUTH
 * @desc All AUTH actions
 */
import * as types from './auth.constants';
// Types
import type { Action } from '@/types/store';
import type {
  LoadingKeys,
  LoginActionPayload,
  LoginDto,
  RegisterActionPayload,
  RegisterDto,
} from '@/types/auth';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys
  ): Action<{ status: boolean; key: LoadingKeys }> {
    return {
      type: types.SET_LOADING,
      payload: { status, key },
    };
  }

  /**
   * call login service
   * @param {LoginDto} loginDto
   * @param {AppRouterInstance} router
   * @return {Action<LoginActionPayload>}
   */
  public login(
    loginDto: LoginDto,
    router: AppRouterInstance
  ): Action<LoginActionPayload> {
    return {
      type: types.SAGAS_LOGIN,
      payload: { loginDto, router },
    };
  }

  /**
   * call register service
   * @param {RegisterDto} registerDto
   * @param {AppRouterInstance} router
   * @return {Action<LoginActionPayload>}
   */
  public register(
    registerDto: RegisterDto,
    router: AppRouterInstance
  ): Action<RegisterActionPayload> {
    return {
      type: types.SAGAS_REGISTER,
      payload: { registerDto, router },
    };
  }

  /**
   * fetch logged in user information
   * @return {Action}
   */
  public fetchMe(): Action {
    return {
      type: types.SAGAS_FETCH_ME,
    };
  }
  /**
   * logging out user
   * @return {Action}
   */
  public logout(): Action {
    return {
      type: types.SAGAS_LOGOUT,
    };
  }
}

const AuthActions = new Actions();

export default AuthActions;
