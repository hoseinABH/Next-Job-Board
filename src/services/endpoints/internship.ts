import HttpService from '../base';
// Types
import type {
  ApplicationDto,
  ApplicationResponse,
  CreatePositionDto,
  CreatePositionResponse,
  Position,
  UpdatePositionStatusDto,
  UpdatePositionStatusResponse,
} from '@/types/internship';
import type { BaseApiResponse } from '@/types/http';

class InternShipProvider extends HttpService {
  constructor() {
    super({
      suffix: 'InternShip',
    });
  }
  public createPosition(
    position: CreatePositionDto,
  ): Promise<BaseApiResponse<CreatePositionResponse>> {
    return this.httpService.post('create-position', position);
  }
  public sendApplication(
    applicationRequest: ApplicationDto,
  ): Promise<BaseApiResponse<ApplicationResponse>> {
    return this.httpService.post('apply-for-position', applicationRequest);
  }
  public getAllPositions(): Promise<BaseApiResponse<Position[]>> {
    return this.httpService.get('get-all-positions');
  }
  public getPositionDetails(positionId: string): Promise<BaseApiResponse<Position>> {
    return this.httpService.get(`get-company-details?id=${positionId}`);
  }
  public getPositionTests(positionId: string): Promise<BaseApiResponse<unknown>> {
    return this.httpService.get(`get-request-tests?id=${positionId}`);
  }
  public getTestQuestions(testId: string): Promise<BaseApiResponse<unknown>> {
    return this.httpService.get(`get-test-questions?testId=${testId}`);
  }
  public getTestAnswers(testId: string): Promise<BaseApiResponse<unknown>> {
    return this.httpService.get(`get-test-answers?testId=${testId}`);
  }
  public updatePositionStatus(
    data: UpdatePositionStatusDto,
  ): Promise<BaseApiResponse<UpdatePositionStatusResponse>> {
    return this.httpService.put('update-request-status', data);
  }
}

const InternShipService = new InternShipProvider();

export default InternShipService;
