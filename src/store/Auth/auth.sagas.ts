/**
 * @module Sagas/Auth
 * @desc All Auth sagas
 */
// Utilities
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
// Services
import AuthenticationService from '@/services/endpoints/authentication';
// Actions
import AuthActions from './auth.actions';
import { navigate } from '@/actions/navigation';
import { clearSession, setCookie } from '@/actions/cookie';
// Types
import type { LoginDto, LoginResponse, RegisterDto } from '@/types/auth';
import type { Action } from '@/types/store';
import type { BaseApiResponse } from '@/types/http';
// Constants
import * as types from './auth.constants';
import * as Routes from '@/config/routes';
import * as messages from '@/constants/messages';

function* login(action: Action<LoginDto>) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const loginDto = action.payload!;
    const response: BaseApiResponse<LoginResponse> = yield call(() =>
      AuthenticationService.login(loginDto),
    );
    console.log(response);
    if (response.message === 'Success') {
      // yield put(UserActions.setUserInfo(response.data.user));
      setCookie(response.data.token, new Date(response.data.tokenExpires));
      navigate(Routes.CV_MAKER);
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(AuthActions.setLoading(false, 'login'));
  }
}
function* register(action: Action<Omit<RegisterDto, 'userType'>>) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const registerDto = action.payload!;
    const response: BaseApiResponse<LoginResponse> = yield call(() =>
      AuthenticationService.register({ ...registerDto, userType: 'InnerUser' }),
    );
    navigate(Routes.LOGIN);
    toast({
      variant: 'success',
      title: 'عملیات موفق',
      description: `${registerDto.firstName} عزیز حساب کاربری شما با موفقیت ساخته شد`,
    });
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(AuthActions.setLoading(false, 'login'));
  }
}

function* logout() {
  // yield put(UserActions.setUserInfo(null));
  clearSession();
  navigate(Routes.LOGIN);
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_LOGIN, login),
    takeLatest(types.SAGAS_REGISTER, register),
    takeLatest(types.SAGAS_LOGOUT, logout),
  ]);
}
