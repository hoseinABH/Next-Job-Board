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
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  UpdatePersonalDto,
} from '@/types/resume';
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
function* createExperience(action: Action<CreateExperienceDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createExperience'));
    const experience = action.payload!;
    const response: BaseApiResponse<unknown> = yield call(() =>
      ResumeService.createExperience(experience)
    );
    if (response.message === 'Success') {
      toast({
        variant: 'success',
        description: 'سابقه شغلی با موفقیت ثبت شد',
      });
      yield put(ResumeActions.setModalOpen(false, 'workExperience'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'createExperience'));
  }
}
function* createEducation(action: Action<CreateEducationDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createEducation'));
    const education = action.payload!;
    const response: BaseApiResponse<unknown> = yield call(() =>
      ResumeService.createEducation(education)
    );
    if (response.message === 'Success') {
      toast({
        variant: 'success',
        description: 'مقطع تحصیلی با موفقیت ثبت شد',
      });
      yield put(ResumeActions.setModalOpen(false, 'education'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'createEducation'));
  }
}
function* createLanguage(action: Action<CreateLanguageDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createLanguage'));
    const language = action.payload!;
    const response: BaseApiResponse<unknown> = yield call(() =>
      ResumeService.createLanguage(language)
    );
    if (response.message === 'Success') {
      toast({
        variant: 'success',
        description: 'زبان با موفقیت ثبت شد',
      });
      yield put(ResumeActions.setModalOpen(false, 'language'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'createLanguage'));
  }
}
function* createSkill(action: Action<CreateSkillDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createSkill'));
    const skill = action.payload!;
    const response: BaseApiResponse<unknown> = yield call(() =>
      ResumeService.createSkill(skill)
    );
    if (response.message === 'Success') {
      toast({
        variant: 'success',
        description: 'مهارت با موفقیت ثبت شد',
      });
      yield put(ResumeActions.setModalOpen(false, 'skill'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'createSkill'));
  }
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_UPDATE_PERSONAL, updatePersonalInfo),
    takeLatest(types.SAGAS_CREATE_EXPERIENCE, createExperience),
    takeLatest(types.SAGAS_CREATE_EDUCATION, createEducation),
    takeLatest(types.SAGAS_CREATE_LANGUAGE, createLanguage),
    takeLatest(types.SAGAS_CREATE_SKILL, createSkill),
  ]);
}
