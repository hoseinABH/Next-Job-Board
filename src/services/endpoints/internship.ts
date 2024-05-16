import HttpService from '../base';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  ApplicationDto,
  ApplicationResponse,
  CreatePositionDto,
  CreatePositionResponse,
  UpdatePositionStatusDto,
  UpdatePositionStatusResponse,
} from '@/types/internship';

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
  public updatePositionStatus(
    data: UpdatePositionStatusDto,
  ): Promise<BaseApiResponse<UpdatePositionStatusResponse>> {
    return this.httpService.put('update-request-status', data);
  }
}

const InternShipService = new InternShipProvider();

export default InternShipService;
