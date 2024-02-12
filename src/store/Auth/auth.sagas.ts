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
// Types
import type { LoginDto, LoginResponse } from '@/types/auth';
import type { Action } from '@/types/store';
// Constants
import * as types from './auth.constants';
import { messages } from '@/constants/messages';

function* login(action: Action<LoginDto>) {
  try {
    yield put(AuthActions.setLoading(true, 'login'));
    const loginDto = action.payload!;
    const response: LoginResponse = yield call(() =>
      AuthenticationService.loginWithEmail(loginDto)
    );
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
