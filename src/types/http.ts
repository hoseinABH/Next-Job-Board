export interface BaseApiResponse<T = any> {
  status: number;
  message: any;
  data: T;
}
