/**
 * @module Sagas/User
 * @desc All User sagas
 */

// Utilities
import { toast } from '@/components/ui/use-toast';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
// Services
import UserServices from '@/services/endpoints/user';
// Actions
import CommonActions from '../Common/common.actions';
import UserActions from './user.actions';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { Action } from '@/types/store';
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  Education,
  Experience,
  Language,
  Skill,
  UpdatePersonalDto,
} from '@/types/user';
import type { UserState } from './user.reducer';
// Constants
import * as messages from '@/constants/messages';
import * as types from './user.constants';

function* getUserResume() {
  try {
    yield put(UserActions.setLoading(true, 'getUserResume'));

    // const response: BaseApiResponse<userResume> = yield call(() =>
    //   UserServices.getUserResume()
    // );
    // if (response.message === 'Success') {
    //   yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
    //   yield put(UserActions.prepareUserResume(response.data));
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'getUserResume'));
  }
}

function* updatePersonalInfo(action: Action<UpdatePersonalDto>) {
  try {
    yield put(UserActions.setLoading(true, 'updatePersonal'));
    const { userResume }: UserState = yield select((state) => state.user);
    const personalData = action.payload!;
    // let response: BaseApiResponse;
    // if (userResume?.personalInfo) {
    //   response = yield call(() => UserServices.updatePersonal(personalData));
    // } else {
    //   response = yield call(() => UserServices.submitPersonal(personalData));
    // }
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مشخصات شخصی با موفقیت ثبت شد',
    //   });
    //   yield put(UserActions.setModalOpen(false, 'aboutMe'));
    //   yield put(UserActions.setModalOpen(false, 'personalInfo'));
    //   yield put(
    //     UserActions.prepareUserResume({
    //       ...userResume!,
    //       personalInfo: { ...userResume?.personalInfo, ...personalData },
    //     })
    //   );
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'updatePersonal'));
  }
}
function* createExperience(action: Action<CreateExperienceDto>) {
  try {
    yield put(UserActions.setLoading(true, 'createExperience'));
    const { userResume }: UserState = yield select((state) => state.user);
    const experience = action.payload!;
    // const response: BaseApiResponse<Experience[]> = yield call(() =>
    //   UserServices.createExperience(experience)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'سابقه شغلی با موفقیت ثبت شد',
    //   });
    //   yield put(UserActions.setModalOpen(false, 'workExperience'));
    //   yield put(
    //     UserActions.prepareUserResume({
    //       ...userResume!,
    //       workExperience: response.data,
    //     })
    //   );
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'createExperience'));
  }
}
function* createEducation(action: Action<CreateEducationDto>) {
  try {
    yield put(UserActions.setLoading(true, 'createEducation'));
    const { userResume }: UserState = yield select((state) => state.user);
    const education = action.payload!;
    // const response: BaseApiResponse<Education[]> = yield call(() =>
    //   UserServices.createEducation(education)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مقطع تحصیلی با موفقیت ثبت شد',
    //   });
    //   yield put(UserActions.setModalOpen(false, 'education'));
    //   yield put(
    //     UserActions.prepareUserResume({
    //       ...userResume!,
    //       education: response.data,
    //     })
    //   );
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'createEducation'));
  }
}
function* createLanguage(action: Action<CreateLanguageDto>) {
  try {
    yield put(UserActions.setLoading(true, 'createLanguage'));
    const { userResume }: UserState = yield select((state) => state.user);
    const language = action.payload!;
    // const response: BaseApiResponse<Language[]> = yield call(() =>
    //   UserServices.createLanguage(language)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'زبان با موفقیت ثبت شد',
    //   });
    //   yield put(UserActions.setModalOpen(false, 'language'));
    //   yield put(
    //     UserActions.prepareUserResume({
    //       ...userResume!,
    //       languages: response.data,
    //     })
    //   );
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'createLanguage'));
  }
}
function* createSkill(action: Action<CreateSkillDto>) {
  try {
    yield put(UserActions.setLoading(true, 'createSkill'));
    const { userResume }: UserState = yield select((state) => state.user);
    const skill = action.payload!;
    // const response: BaseApiResponse<Skill[]> = yield call(() =>
    //   UserServices.createSkill(skill)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مهارت با موفقیت ثبت شد',
    //   });
    //   yield put(UserActions.setModalOpen(false, 'skill'));
    //   yield put(
    //     UserActions.prepareUserResume({
    //       ...userResume!,
    //       skills: response.data,
    //     })
    //   );
    // }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'createSkill'));
  }
}
function* removeField() {
  try {
    yield put(UserActions.setLoading(true, 'removeEntity'));
    const { dialogData, userResume }: UserState = yield select((state) => state.user);
    const entity = dialogData?.model.entity;
    const entityId = dialogData?.model.id!;
    let response: BaseApiResponse | null = null;
    let entityTitle = '';
    switch (entity) {
      case 'education':
        response = yield call(() => UserServices.deleteEducation(entityId));
        entityTitle = 'سابقه تحصیلی';
        break;
      case 'language':
        response = yield call(() => UserServices.deleteLanguage(entityId));
        entityTitle = 'زبان';
        break;
      case 'skill':
        response = yield call(() => UserServices.deleteSkill(entityId));
        entityTitle = 'مهارت';
        break;
      case 'workExperience':
        response = yield call(() => UserServices.deleteExperience(entityId));
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
      switch (entity) {
        case 'workExperience':
          const newExperience: Experience[] = response.data;
          yield put(
            UserActions.prepareUserResume({
              ...userResume!,
              workExperience: newExperience,
            }),
          );
          break;
        case 'education':
          const newEducations: Education[] = response.data;
          yield put(
            UserActions.prepareUserResume({
              ...userResume!,
              education: newEducations,
            }),
          );
          break;
        case 'language':
          const newLanguages: Language[] = response.data;
          yield put(
            UserActions.prepareUserResume({
              ...userResume!,
              languages: newLanguages,
            }),
          );
          break;
        case 'skill':
          const newSkills: Skill[] = response.data;
          yield put(
            UserActions.prepareUserResume({
              ...userResume!,
              skills: newSkills,
            }),
          );
          break;
        default:
          break;
      }
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'removeEntity'));
  }
}
export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_GET_USER_RESUME, getUserResume),
    takeLatest(types.SAGAS_UPDATE_PERSONAL, updatePersonalInfo),
    takeLatest(types.SAGAS_CREATE_EXPERIENCE, createExperience),
    takeLatest(types.SAGAS_CREATE_EDUCATION, createEducation),
    takeLatest(types.SAGAS_CREATE_LANGUAGE, createLanguage),
    takeLatest(types.SAGAS_CREATE_SKILL, createSkill),
    takeLatest(types.SAGAS_REMOVE_RESUME_FIELD, removeField),
  ]);
}
