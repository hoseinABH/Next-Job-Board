/**
 * @module Sagas/Auth
 * @desc All Auth sagas
 */
// Utilities
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
import { removeToken, storeToken } from '@/lib/token';
import Database from '@/lib/database';
// Services
import AuthenticationService from '@/services/endpoints/authentication';
// Actions
import AuthActions from './auth.actions';
import UserActions from '../User/user.actions';
import { navigate } from '@/actions/navigation';
// Types
import type {
  LoggedInUserInfo,
  LoginActionPayload,
  LoginResponse,
  RegisterActionPayload,
} from '@/types/auth';
import type { Action } from '@/types/store';
import type { BaseApiResponse } from '@/types/http';
// Constants
import * as types from './auth.constants';
import * as Routes from '@/config/routes';
import * as messages from '@/constants/messages';

function* login(action: Action<LoginActionPayload>) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const { loginDto, router } = action.payload!;
    const response: BaseApiResponse<LoginResponse> = yield call(() =>
      AuthenticationService.loginWithEmail(loginDto)
    );
    if (response.data) {
      storeToken(response.data.token);
      Database.store('refreshToken', response.data.refreshToken);
      yield put(UserActions.setUserInfo(response.data.user));
      yield put(UserActions.setIsLoggedIn(true));
      router.push(Routes.CV_MAKER);
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
function* register(action: Action<RegisterActionPayload>) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const { registerDto, router } = action.payload!;
    yield call(() => AuthenticationService.registerWithEmail(registerDto));
    router.push(Routes.LOGIN);
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

function* fetchMe() {
  try {
    yield put(AuthActions.setLoading(true, 'fetchMe'));
    const response: BaseApiResponse<LoggedInUserInfo> = yield call(() =>
      AuthenticationService.fetchMe()
    );
    if (!response.data) return;
    yield put(UserActions.setUserInfo(response.data));
    yield put(UserActions.setIsLoggedIn(true));
  } catch (error) {
    toast({
      description: messages.fetchDataError,
    });
  } finally {
    yield put(AuthActions.setLoading(false, 'fetchMe'));
  }
}

function* logout() {
  Database.delete('refreshToken');
  removeToken();
  yield put(UserActions.setIsLoggedIn(false));
  yield put(UserActions.setUserInfo(null));
  yield call(() => navigate(Routes.LOGIN));
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_LOGIN, login),
    takeLatest(types.SAGAS_REGISTER, register),
    takeLatest(types.SAGAS_FETCH_ME, fetchMe),
    takeLatest(types.SAGAS_LOGOUT, logout),
  ]);
}
