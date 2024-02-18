/**
 * @module Sagas/Resume
 * @desc All resume sagas
 */

// Utilities
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
// Services
import ResumeService from '@/services/endpoints/resume';
// Actions
import ResumeActions from './resume.actions';
// Types
import type { UpdatePersonalDto } from '@/types/resume';
import type { Action } from '@/types/store';
import type { BaseApiResponse } from '@/types/http';
// Constants
import * as types from './resume.constants';
import * as messages from '@/constants/messages';

function* updatePersonalInfo(action: Action<UpdatePersonalDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'updatePersonal'));
    const personalData = action.payload!;
    const response: BaseApiResponse<unknown> = yield call(() =>
      ResumeService.updatePersonal(personalData)
    );
    if (response.message === 'Success') {
      console.log({ personalData });
      toast({
        variant: 'success',
        description: 'مشخصات شخصی با موفقیت ثبت شد',
      });
      yield put(ResumeActions.setModalOpen(false, 'aboutMe'));
      yield put(ResumeActions.setModalOpen(false, 'personalInfo'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'updatePersonal'));
  }
}

export default function* networkListeners() {
  yield all([takeLatest(types.SAGAS_UPDATE_PERSONAL, updatePersonalInfo)]);
}
