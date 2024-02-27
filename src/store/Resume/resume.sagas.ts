/**
 * @module Sagas/Resume
 * @desc All resume sagas
 */

// Utilities
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
// Services
import ResumeService from '@/services/endpoints/resume';
// Actions
import ResumeActions from './resume.actions';
import CommonActions from '../Common/common.actions';
// Types
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  ResumeData,
  UpdatePersonalDto,
} from '@/types/resume';
import type { Action } from '@/types/store';
import type { BaseApiResponse } from '@/types/http';
import type { ResumeState } from './resume.reducer';
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
function* removeField(action: Action<string>) {
  try {
    yield put(ResumeActions.setLoading(true, 'removeEntity'));
    const { deleteAlertData }: ResumeState = yield select(
      (state) => state.resume
    );
    const id = action.payload!;
    const entity = deleteAlertData?.model.entity;
    let response: BaseApiResponse<unknown> | null = null;
    let entityTitle = '';
    switch (entity) {
      case 'education':
        response = yield call(() => ResumeService.deleteEducation(id));
        entityTitle = 'سابقه تحصیلی';
        break;
      case 'language':
        response = yield call(() => ResumeService.deleteLanguage(id));
        entityTitle = 'زبان';
        break;
      case 'skill':
        response = yield call(() => ResumeService.deleteSkill(id));
        entityTitle = 'مهارت';
        break;
      case 'workExperience':
        response = yield call(() => ResumeService.deleteExperience(id));
        entityTitle = 'سابقه شغلی';
        break;
      default:
        break;
    }
    if (response?.message === 'Success') {
      toast({
        variant: 'success',
        description: `${entityTitle} با موفقیت حذف شد`,
      });
      yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'removeEntity'));
  }
}
function* getResumeData() {
  try {
    yield put(ResumeActions.setLoading(true, 'removeEntity'));

    const response: BaseApiResponse<ResumeData> = yield call(() =>
      ResumeService.getMyResume()
    );
    if (response.message === 'Success') {
      yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
      yield put(ResumeActions.fillResumeData(response.data));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'removeEntity'));
  }
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_UPDATE_PERSONAL, updatePersonalInfo),
    takeLatest(types.SAGAS_CREATE_EXPERIENCE, createExperience),
    takeLatest(types.SAGAS_CREATE_EDUCATION, createEducation),
    takeLatest(types.SAGAS_CREATE_LANGUAGE, createLanguage),
    takeLatest(types.SAGAS_CREATE_SKILL, createSkill),
    takeLatest(types.SAGAS_REMOVE_RESUME_FIELD, removeField),
    takeLatest(types.SAGAS_GET_RESUME_DATA, getResumeData),
  ]);
}
