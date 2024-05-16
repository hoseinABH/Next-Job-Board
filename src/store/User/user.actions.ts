/**
 * @module Actions/User
 * @desc All User actions
 */
import * as types from './user.constants';
// Types
import type { Action, ExtraActionInfo } from '@/types/store';
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  DeleteDialogData,
  LoadingKeys,
  ModalKeys,
  UpdatePersonalDto,
  UserMinimalProfile,
  UserResume,
} from '@/types/user';
import type { Nullable } from '@/types/common';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys,
  ): Action<{ status: boolean; key: LoadingKeys }> {
    return {
      type: types.SET_LOADING,
      payload: { status, key },
    };
  }
  /**
   * set modals open
   * @param {boolean} open
   * @param {ModalKeys} key
   * @return {Action<{ open: boolean; key: ModalKeys }>}
   */
  public setModalOpen(open: boolean, key: ModalKeys): Action<{ open: boolean; key: ModalKeys }> {
    return {
      type: types.SET_OPEN_MODAL,
      payload: { open, key },
    };
  }
  /**
   * set dialog data
   * @param {DeleteDialogData} data
   * @return {Action<DeleteDialogData>}
   */
  public setDialogData(data: DeleteDialogData): Action<DeleteDialogData> {
    return {
      type: types.SET_DIALOG_DATA,
      payload: data,
    };
  }
  /**
   * update personal user info
   * @param {UpdatePersonalDto} data
   * @return {Action<UpdatePersonalDto>}
   */
  public updatePersonalInfo(personalInfo: UpdatePersonalDto): Action<UpdatePersonalDto> {
    return {
      type: types.SAGAS_UPDATE_PERSONAL,
      payload: personalInfo,
    };
  }
  /**
   * create a work experience
   * @param {CreateExperienceDto} experience
   * @return {Action<CreateExperienceDto>}
   */
  public createExperience(experience: CreateExperienceDto): Action<CreateExperienceDto> {
    return {
      type: types.SAGAS_CREATE_EXPERIENCE,
      payload: experience,
    };
  }
  /**
   * create an education
   * @param {CreateEducationDto} education
   * @return {Action<CreateEducationDto>}
   */
  public createEducation(education: CreateEducationDto): Action<CreateEducationDto> {
    return {
      type: types.SAGAS_CREATE_EDUCATION,
      payload: education,
    };
  }
  /**
   * create a language
   * @param {CreateLanguageDto} language
   * @return {Action<CreateLanguageDto>}
   */
  public createLanguage(language: CreateLanguageDto): Action<CreateLanguageDto> {
    return {
      type: types.SAGAS_CREATE_LANGUAGE,
      payload: language,
    };
  }
  /**
   * create a skill
   * @param {CreateSkillDto} skill
   * @return {Action<CreateSkillDto>}
   */
  public createSkill(skill: CreateSkillDto): Action<CreateSkillDto> {
    return {
      type: types.SAGAS_CREATE_SKILL,
      payload: skill,
    };
  }
  /**
   * remove a field
   * @return {Action}
   */
  public removeField(): Action {
    return {
      type: types.SAGAS_REMOVE_RESUME_FIELD,
    };
  }
  /**
   * get/set user profile
   * @param {Nullable<UserMinimalProfile>} data
   * @param {ExtraActionInfo} options
   * @return {Action<Nullable<UserMinimalProfile>>}
   */
  public prepareUserProfile(
    data: Nullable<UserMinimalProfile>,
    options?: ExtraActionInfo,
  ): Action<Nullable<any>> {
    return {
      type: options?.sagas ? types.SAGAS_GET_USER_PROFILE : types.SET_USER_PROFILE,
      payload: data,
    };
  }
  /**
   * get/set user resume
   * @param {Nullable<UserResume>} data
   * @param {ExtraActionInfo} options
   * @return {Action<Nullable<UserResume>>}
   */
  public prepareUserResume(
    data: Nullable<UserResume>,
    options?: ExtraActionInfo,
  ): Action<Nullable<UserResume>> {
    return {
      type: options?.sagas ? types.SAGAS_GET_USER_RESUME : types.SET_USER_RESUME,
      payload: data,
    };
  }
}

const UserActions = new Actions();

export default UserActions;
