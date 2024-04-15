/**
 * @module Sagas/Resume
 * @desc All resume sagas
 */

// Utilities
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
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
  Education,
  Experience,
  Language,
  ResumeData,
  Skill,
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
    const { resumeData }: ResumeState = yield select((state) => state.resume);
    const personalData = action.payload!;
    // let response: BaseApiResponse;
    // if (resumeData?.personalInfo) {
    //   response = yield call(() => ResumeService.updatePersonal(personalData));
    // } else {
    //   response = yield call(() => ResumeService.submitPersonal(personalData));
    // }
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مشخصات شخصی با موفقیت ثبت شد',
    //   });
    //   yield put(ResumeActions.setModalOpen(false, 'aboutMe'));
    //   yield put(ResumeActions.setModalOpen(false, 'personalInfo'));
    //   yield put(
    //     ResumeActions.fillResumeData({
    //       ...resumeData!,
    //       personalInfo: { ...resumeData?.personalInfo, ...personalData },
    //     })
    //   );
    // }
    /** TEST CODE */
    yield delay(3000);
    yield put(ResumeActions.setModalOpen(false, 'aboutMe'));
    yield put(ResumeActions.setModalOpen(false, 'personalInfo'));
    yield put(
      ResumeActions.fillResumeData({
        ...resumeData!,
        personalInfo: { ...resumeData?.personalInfo, ...personalData },
      })
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
    yield put(ResumeActions.setLoading(false, 'updatePersonal'));
  }
}
function* createExperience(action: Action<CreateExperienceDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createExperience'));
    const { resumeData }: ResumeState = yield select((state) => state.resume);
    const experience = action.payload!;
    // const response: BaseApiResponse<Experience[]> = yield call(() =>
    //   ResumeService.createExperience(experience)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'سابقه شغلی با موفقیت ثبت شد',
    //   });
    //   yield put(ResumeActions.setModalOpen(false, 'workExperience'));
    //   yield put(
    //     ResumeActions.fillResumeData({
    //       ...resumeData!,
    //       workExperience: response.data,
    //     })
    //   );
    // }
    /** TEST CODE */
    yield delay(3000);
    yield put(
      ResumeActions.fillResumeData({
        ...resumeData!,
        workExperience: [...resumeData?.workExperience!, experience as any],
      })
    );
    yield put(ResumeActions.setModalOpen(false, 'workExperience'));
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
    yield put(ResumeActions.setLoading(false, 'createExperience'));
  }
}
function* createEducation(action: Action<CreateEducationDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createEducation'));
    const { resumeData }: ResumeState = yield select((state) => state.resume);
    const education = action.payload!;
    // const response: BaseApiResponse<Education[]> = yield call(() =>
    //   ResumeService.createEducation(education)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مقطع تحصیلی با موفقیت ثبت شد',
    //   });
    //   yield put(ResumeActions.setModalOpen(false, 'education'));
    //   yield put(
    //     ResumeActions.fillResumeData({
    //       ...resumeData!,
    //       education: response.data,
    //     })
    //   );
    // }
    /** TEST CODE */
    yield delay(3000);
    yield put(
      ResumeActions.fillResumeData({
        ...resumeData!,
        education: [...resumeData?.education!, education as any],
      })
    );
    yield put(ResumeActions.setModalOpen(false, 'education'));
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
    yield put(ResumeActions.setLoading(false, 'createEducation'));
  }
}
function* createLanguage(action: Action<CreateLanguageDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createLanguage'));
    const { resumeData }: ResumeState = yield select((state) => state.resume);
    const language = action.payload!;
    // const response: BaseApiResponse<Language[]> = yield call(() =>
    //   ResumeService.createLanguage(language)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'زبان با موفقیت ثبت شد',
    //   });
    //   yield put(ResumeActions.setModalOpen(false, 'language'));
    //   yield put(
    //     ResumeActions.fillResumeData({
    //       ...resumeData!,
    //       languages: response.data,
    //     })
    //   );
    // }
    /** TEST CODE */
    yield delay(3000);
    yield put(
      ResumeActions.fillResumeData({
        ...resumeData!,
        languages: [...resumeData?.languages!, language as any],
      })
    );
    yield put(ResumeActions.setModalOpen(false, 'language'));
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
    yield put(ResumeActions.setLoading(false, 'createLanguage'));
  }
}
function* createSkill(action: Action<CreateSkillDto>) {
  try {
    yield put(ResumeActions.setLoading(true, 'createSkill'));
    const { resumeData }: ResumeState = yield select((state) => state.resume);
    const skill = action.payload!;
    // const response: BaseApiResponse<Skill[]> = yield call(() =>
    //   ResumeService.createSkill(skill)
    // );
    // if (response.message === 'Success') {
    //   toast({
    //     variant: 'success',
    //     description: 'مهارت با موفقیت ثبت شد',
    //   });
    //   yield put(ResumeActions.setModalOpen(false, 'skill'));
    //   yield put(
    //     ResumeActions.fillResumeData({
    //       ...resumeData!,
    //       skills: response.data,
    //     })
    //   );
    // }
    /** TEST CODE */
    yield delay(3000);
    yield put(
      ResumeActions.fillResumeData({
        ...resumeData!,
        skills: [...resumeData?.skills!, skill as any],
      })
    );
    yield put(ResumeActions.setModalOpen(false, 'skill'));
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
    yield put(ResumeActions.setLoading(false, 'createSkill'));
  }
}
function* removeField() {
  try {
    yield put(ResumeActions.setLoading(true, 'removeEntity'));
    const { dialogData, resumeData }: ResumeState = yield select(
      (state) => state.resume
    );
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
            ResumeActions.fillResumeData({
              ...resumeData!,
              workExperience: newExperience,
            })
          );
          break;
        case 'education':
          const newEducations: Education[] = response.data;
          yield put(
            ResumeActions.fillResumeData({
              ...resumeData!,
              education: newEducations,
            })
          );
          break;
        case 'language':
          const newLanguages: Language[] = response.data;
          yield put(
            ResumeActions.fillResumeData({
              ...resumeData!,
              languages: newLanguages,
            })
          );
          break;
        case 'skill':
          const newSkills: Skill[] = response.data;
          yield put(
            ResumeActions.fillResumeData({
              ...resumeData!,
              skills: newSkills,
            })
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
    yield put(ResumeActions.setLoading(false, 'removeEntity'));
  }
}
function* getResumeData() {
  try {
    yield put(ResumeActions.setLoading(true, 'getMyResume'));

    // const response: BaseApiResponse<ResumeData> = yield call(() =>
    //   ResumeService.getMyResume()
    // );
    // if (response.message === 'Success') {
    //   yield put(CommonActions.setModalOpen(false, 'confirmDelete'));
    //   yield put(ResumeActions.fillResumeData(response.data));
    // }
    /** TEST CODE */
    yield put(
      ResumeActions.fillResumeData({
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
      })
    );
    yield delay(3000);
    /** TEST CODE */
  } catch (error) {
    toast({
      title: 'خطایی رخ داده است',
      description: messages.commonError,
    });
  } finally {
    yield put(ResumeActions.setLoading(false, 'getMyResume'));
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
