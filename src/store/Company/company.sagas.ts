/**
 * @module Sagas/Company
 * @desc All Company sagas
 */

// Utilities
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
// Services
import CompanyService from '@/services/endpoints/company';
// Actions
import CompanyActions from './company.actions';
// Types
import { Company } from '@/types/company';
import { BaseApiResponse } from '@/types/http';
// Constants
import * as types from './company.constants';
import * as messages from '@/constants/messages';

function* getResumeData() {
  try {
    yield put(CompanyActions.setLoading(true, 'getAllCompanies'));

    const response: BaseApiResponse<{ data: Company[] }> = yield call(() =>
      CompanyService.getAllCompanies()
    );
    if (response.message === 'Success') {
      yield put(CompanyActions.fillCompanies(response.data.data));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(CompanyActions.setLoading(false, 'getAllCompanies'));
  }
}

export default function* networkListeners() {
  yield all([takeLatest(types.SAGAS_GET_ALL_COMPANY, getResumeData)]);
}
