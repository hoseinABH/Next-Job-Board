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
// Types
import type {
  LoggedInUserInfo,
  LoginActionPayload,
  LoginResponse,
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
      router.push(Routes.HOME);
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
    call(logout);
  } finally {
    yield put(AuthActions.setLoading(false, 'fetchMe'));
  }
}

function* logout() {
  Database.delete('refreshToken');
  removeToken();
  yield put(UserActions.setIsLoggedIn(false));
  yield put(UserActions.setUserInfo(null));
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_LOGIN, login),
    takeLatest(types.SAGAS_FETCH_ME, fetchMe),
    takeLatest(types.SAGAS_LOGOUT, logout),
  ]);
}
