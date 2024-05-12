import HttpService from '../base';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  CreateEducationDto,
  CreateExperienceDto,
  CreateLanguageDto,
  CreateSkillDto,
  UpdatePersonalDto,
} from '@/types/user';

class UserProvider extends HttpService {
  constructor() {
    super({
      suffix: 'user',
    });
  }
  public getUserProfile(): Promise<BaseApiResponse> {
    return this.httpService.get('get-minimal-profile');
  }
  public getUserResume(): Promise<BaseApiResponse> {
    return this.httpService.get('get-profile');
  }
  public submitPersonal(data: UpdatePersonalDto): Promise<BaseApiResponse> {
    return this.httpService.post('personal', data);
  }
  public updatePersonal(data: UpdatePersonalDto): Promise<BaseApiResponse> {
    return this.httpService.put('personal', data);
  }
  public createEducation(education: CreateEducationDto): Promise<BaseApiResponse> {
    return this.httpService.post('education', education);
  }
  public deleteEducation(educationId: string): Promise<BaseApiResponse> {
    return this.httpService.delete(`education/${educationId}`);
  }
  public getAllEducations(): Promise<BaseApiResponse> {
    return this.httpService.get('educations');
  }
  public createExperience(experience: CreateExperienceDto): Promise<BaseApiResponse> {
    return this.httpService.post('experience', experience);
  }
  public deleteExperience(experienceId: string): Promise<BaseApiResponse> {
    return this.httpService.delete(`experience/${experienceId}`);
  }
  public getAllExperiences(): Promise<BaseApiResponse> {
    return this.httpService.get('experiences');
  }
  public createLanguage(language: CreateLanguageDto): Promise<BaseApiResponse> {
    return this.httpService.post('language', language);
  }
  public deleteLanguage(languageId: string): Promise<BaseApiResponse> {
    return this.httpService.delete(`language/${languageId}`);
  }
  public getAllLanguages(): Promise<BaseApiResponse> {
    return this.httpService.get('languages');
  }
  public createSkill(skill: CreateSkillDto): Promise<BaseApiResponse> {
    return this.httpService.post('skill', skill);
  }
  public deleteSkill(skillId: string): Promise<BaseApiResponse> {
    return this.httpService.delete(`skill/${skillId}`);
  }
  public getAllSkills(): Promise<BaseApiResponse> {
    return this.httpService.get('skills');
  }
}

const UserServices = new UserProvider();

export default UserServices;
