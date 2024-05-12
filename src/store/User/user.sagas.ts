/**
 * @module Sagas/User
 * @desc All User sagas
 */

// Utilities
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from '@/components/ui/use-toast';
// Services
import ResumeService from '@/services/endpoints/user';
// Actions
import UserActions from './user.actions';
import CommonActions from '../Common/common.actions';
// Types
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
import type { Action } from '@/types/store';
import type { BaseApiResponse } from '@/types/http';
import type { UserState } from './user.reducer';
// Constants
import * as types from './user.constants';
import * as messages from '@/constants/messages';

function* getUserProfile() {
  try {
    yield put(UserActions.setLoading(true, 'getUserProfile'));
    const response: BaseApiResponse<any> = yield call(() => ResumeService.getUserProfile());
    if (response.message === 'Success') {
      yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
      yield put(UserActions.prepareUserResume(response.data));
    }
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(UserActions.setLoading(false, 'getUserProfile'));
  }
}
function* getUserResume() {
  try {
    yield put(UserActions.setLoading(true, 'getUserResume'));

    // const response: BaseApiResponse<userResume> = yield call(() =>
    //   ResumeService.getUserResume()
    // );
    // if (response.message === 'Success') {
    //   yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
    //   yield put(UserActions.prepareUserResume(response.data));
    // }
    /** TEST CODE */
    yield put(
      UserActions.prepareUserResume({
        id: '32323',
        personalInfo: {
          firstName: 'حسین',
          lastName: 'ابوالحسنی',
          photo: {
            id: '',
          },
          maritalStatus: 'single',
          gender: 'male',
          militaryStatus: 'ActiveService',
          address: 'تهران',
          birthDate: new Date().toString(),
          phone: '09380980800',
          aboutMe:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
          jobTitle: 'توسعه دهنده نرم افزار',
        },
        education: [
          {
            educationId: '323232',
            institution: 'دانشگاه تهران',
            degree: 'Bachelor',
            fieldOfStudy: 'مهندسی نرم افزار',
            startDate: new Date().toString(),
            endDate: '',
            currentlyEnrolled: true,
          },
        ],
        workExperience: [
          {
            experienceId: '2132',
            companyName: 'ناسا',
            position: 'مهندس نرم افزار',
            startDate: new Date().toString(),
            endDate: '',
            description: 'توسعه دهنده ارشد بخش فناوری اطلاعات ناسا',
            isCurrent: true,
          },
        ],
        skills: [
          {
            skillId: '13',
            name: 'Soft Skill',
            level: 'Beginner',
          },
        ],
        languages: [
          {
            languageId: '12',
            name: 'آلمانی',
            level: 'Beginner',
          },
        ],
      }),
    );
    yield delay(3000);
    /** TEST CODE */
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
    const { userResume }: UserState = yield select((state) => state.resume);
    const personalData = action.payload!;
    // let response: BaseApiResponse;
    // if (userResume?.personalInfo) {
    //   response = yield call(() => ResumeService.updatePersonal(personalData));
    // } else {
    //   response = yield call(() => ResumeService.submitPersonal(personalData));
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
    /** TEST CODE */
    yield delay(3000);
    yield put(UserActions.setModalOpen(false, 'aboutMe'));
    yield put(UserActions.setModalOpen(false, 'personalInfo'));
    yield put(
      UserActions.prepareUserResume({
        ...userResume!,
        personalInfo: { ...userResume?.personalInfo, ...personalData },
      }),
    );
    toast({
      variant: 'success',
      description: 'مشخصات شخصی با موفقیت ثبت شد',
    });
    /** TEST CODE */
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
    const { userResume }: UserState = yield select((state) => state.resume);
    const experience = action.payload!;
    // const response: BaseApiResponse<Experience[]> = yield call(() =>
    //   ResumeService.createExperience(experience)
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
    /** TEST CODE */
    yield delay(3000);
    yield put(
      UserActions.prepareUserResume({
        ...userResume!,
        workExperience: [...userResume?.workExperience!, experience as any],
      }),
    );
    yield put(UserActions.setModalOpen(false, 'workExperience'));
    toast({
      variant: 'success',
      description: 'سابقه شغلی با موفقیت ثبت شد',
    });
    /** TEST CODE */
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
    const { userResume }: UserState = yield select((state) => state.resume);
    const education = action.payload!;
    // const response: BaseApiResponse<Education[]> = yield call(() =>
    //   ResumeService.createEducation(education)
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
    /** TEST CODE */
    yield delay(3000);
    yield put(
      UserActions.prepareUserResume({
        ...userResume!,
        education: [...userResume?.education!, education as any],
      }),
    );
    yield put(UserActions.setModalOpen(false, 'education'));
    toast({
      variant: 'success',
      description: 'مقطع تحصیلی با موفقیت ثبت شد',
    });
    /** TEST CODE */
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
    const { userResume }: UserState = yield select((state) => state.resume);
    const language = action.payload!;
    // const response: BaseApiResponse<Language[]> = yield call(() =>
    //   ResumeService.createLanguage(language)
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
    /** TEST CODE */
    yield delay(3000);
    yield put(
      UserActions.prepareUserResume({
        ...userResume!,
        languages: [...userResume?.languages!, language as any],
      }),
    );
    yield put(UserActions.setModalOpen(false, 'language'));
    toast({
      variant: 'success',
      description: 'زبان با موفقیت ثبت شد',
    });
    /** TEST CODE */
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
    const { userResume }: UserState = yield select((state) => state.resume);
    const skill = action.payload!;
    // const response: BaseApiResponse<Skill[]> = yield call(() =>
    //   ResumeService.createSkill(skill)
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
    /** TEST CODE */
    yield delay(3000);
    yield put(
      UserActions.prepareUserResume({
        ...userResume!,
        skills: [...userResume?.skills!, skill as any],
      }),
    );
    yield put(UserActions.setModalOpen(false, 'skill'));
    toast({
      variant: 'success',
      description: 'مهارت با موفقیت ثبت شد',
    });
    /** TEST CODE */
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
    const { dialogData, userResume }: UserState = yield select((state) => state.resume);
    const entity = dialogData?.model.entity;
    const entityId = dialogData?.model.id!;
    let response: BaseApiResponse | null = null;
    let entityTitle = '';
    switch (entity) {
      case 'education':
        response = yield call(() => ResumeService.deleteEducation(entityId));
        entityTitle = 'سابقه تحصیلی';
        break;
      case 'language':
        response = yield call(() => ResumeService.deleteLanguage(entityId));
        entityTitle = 'زبان';
        break;
      case 'skill':
        response = yield call(() => ResumeService.deleteSkill(entityId));
        entityTitle = 'مهارت';
        break;
      case 'workExperience':
        response = yield call(() => ResumeService.deleteExperience(entityId));
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
    takeLatest(types.SAGAS_GET_USER_PROFILE, getUserProfile),
    takeLatest(types.SAGAS_GET_USER_RESUME, getUserResume),
    takeLatest(types.SAGAS_UPDATE_PERSONAL, updatePersonalInfo),
    takeLatest(types.SAGAS_CREATE_EXPERIENCE, createExperience),
    takeLatest(types.SAGAS_CREATE_EDUCATION, createEducation),
    takeLatest(types.SAGAS_CREATE_LANGUAGE, createLanguage),
    takeLatest(types.SAGAS_CREATE_SKILL, createSkill),
    takeLatest(types.SAGAS_REMOVE_RESUME_FIELD, removeField),
  ]);
}
