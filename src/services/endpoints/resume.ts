import HttpService from '../base';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { UpdatePersonalDto } from '@/types/resume';

class ResumeProvider extends HttpService {
  constructor() {
    super({
      suffix: 'resume',
    });
  }
  public updatePersonal(data: UpdatePersonalDto): Promise<BaseApiResponse> {
    return this.httpService.put('personal', data);
  }
}

const ResumeService = new ResumeProvider();

export default ResumeService;
