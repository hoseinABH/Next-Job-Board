export interface BaseApiResponse<T> {
  code: number;
  message: any;
  data: T;
}
