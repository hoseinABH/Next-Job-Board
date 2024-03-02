import HttpService from '../base';
// Types
import type { Company } from '@/types/company';
import type { BaseApiResponse } from '@/types/http';

class CompanyProvider extends HttpService {
  constructor() {
    super({
      suffix: 'company',
    });
  }
  public getAllCompanies(): Promise<BaseApiResponse<Company[]>> {
    return this.httpService.get('');
  }
  public getCompanyById(id: string): Promise<BaseApiResponse<Company>> {
    return this.httpService.get(`/${id}`);
  }
}

const CompanyService = new CompanyProvider();

export default CompanyService;
