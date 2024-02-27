/**
 * @module Actions/Resume
 * @desc All Resume actions
 */
import * as types from './resume.constants';
// Types
import type { Action, ExtraActionInfo } from '@/types/store';
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  DeleteAlertData,
  LoadingKeys,
  ModalKeys,
  ResumeData,
  UpdatePersonalDto,
} from '@/types/resume';
import { Nullable } from '@/types/common';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys
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
  public setModalOpen(
    open: boolean,
    key: ModalKeys
  ): Action<{ open: boolean; key: ModalKeys }> {
    return {
      type: types.SET_OPEN_MODAL,
      payload: { open, key },
    };
  }
  /**
   * set delete alert data
   * @param {DeleteAlertData} data
   * @return {Action<DeleteAlertData>}
   */
  public setDeleteAlertData(data: DeleteAlertData): Action<DeleteAlertData> {
    return {
      type: types.SET_DELETE_DATA,
      payload: data,
    };
  }
  /**
   * update personal user info
   * @param {UpdatePersonalDto} data
   * @return {Action<UpdatePersonalDto>}
   */
  public updatePersonalInfo(
    personalInfo: UpdatePersonalDto
  ): Action<UpdatePersonalDto> {
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
  public createExperience(
    experience: CreateExperienceDto
  ): Action<CreateExperienceDto> {
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
  public createEducation(
    education: CreateEducationDto
  ): Action<CreateEducationDto> {
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
  public createLanguage(
    language: CreateLanguageDto
  ): Action<CreateLanguageDto> {
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
   * @param {string} id
   * @return {Action<string>}
   */
  public removeField(id: string): Action<string> {
    return {
      type: types.SAGAS_REMOVE_RESUME_FIELD,
      payload: id,
    };
  }
  /**
   * fill resume data
   * @param {Nullable<ResumeData>} data
   * @param {ExtraActionInfo} options
   * @return {Action<Nullable<ResumeData>>}
   */
  public fillResumeData(
    data: Nullable<ResumeData>,
    options?: ExtraActionInfo
  ): Action<Nullable<ResumeData>> {
    return {
      type: options?.sagas
        ? types.SAGAS_GET_RESUME_DATA
        : types.SET_RESUME_DATA,
      payload: data,
    };
  }
}

const ResumeActions = new Actions();

export default ResumeActions;
