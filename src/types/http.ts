export interface BaseApiResponse<T = any> {
  code: number;
  message: any;
  data: T;
}
