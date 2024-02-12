/**
 * @module Sagas/Auth
 * @desc All Auth sagas
 */
// Utilities
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
import { storeToken } from '@/lib/token';
import Database from '@/lib/database';
// Services
import AuthenticationService from '@/services/endpoints/authentication';
// Actions
import AuthActions from './auth.actions';
import UserActions from '../User/user.actions';
// Types
import type { LoginDto, LoginResponse } from '@/types/auth';
import type { Action } from '@/types/store';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
// Constants
import * as types from './auth.constants';
import * as Routes from '@/config/routes';
import { messages } from '@/constants/messages';

function* login(
  action: Action<{ loginDto: LoginDto; router: AppRouterInstance }>
) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const { loginDto, router } = action.payload!;
    const response: LoginResponse = yield call(() =>
      AuthenticationService.loginWithEmail(loginDto)
    );
    if (response.token) {
      storeToken(response.token);
      Database.store('refreshToken', response.refreshToken);
      yield put(UserActions.setUserInfo(response.user));
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

export default function* networkListeners() {
  yield all([takeLatest(types.SAGAS_LOGIN, login)]);
}
