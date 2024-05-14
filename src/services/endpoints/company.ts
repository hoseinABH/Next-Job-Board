import HttpService from '../base';
// Types
import type { Company, GetCompanyDashboardResponse } from '@/types/company';
import type { BaseApiResponse } from '@/types/http';

class CompanyProvider extends HttpService {
  constructor() {
    super({
      suffix: 'company',
    });
  }
  public getAllCompanies(): Promise<BaseApiResponse<Company[]>> {
    return this.httpService.get('get-all-companies');
  }
  public getCompanyById(companyId: string): Promise<BaseApiResponse<Company>> {
    return this.httpService.get(`get-company-details?companyId=${companyId}`);
  }
  public getCompanyDashboard(): Promise<BaseApiResponse<GetCompanyDashboardResponse>> {
    return this.httpService.get('get-company-dashboard');
  }
  public getCompanyInterShipPositions(): Promise<BaseApiResponse<unknown>> {
    return this.httpService.get('get-company-internship-positions');
  }
  public getCompanyInterShipApplications(): Promise<BaseApiResponse<unknown>> {
    return this.httpService.get('get-company-internship-requests');
  }
}

const CompanyService = new CompanyProvider();

export default CompanyService;
