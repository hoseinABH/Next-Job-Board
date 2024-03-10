import axios from 'axios';
// Types
import type { AxiosInstance } from 'axios';
import { getSession } from '@/actions/cookie';

interface Config {
  suffix?: string;
  baseURL?: string;
  version?: string;
}

/**
 * A HTTP service which created by Axios instance creator
 *
 * @abstract
 */
abstract class BaseAPI {
  protected httpService: AxiosInstance;

  protected constructor({ suffix, version = 'api/v1' }: Config) {
    this.httpService = axios.create({
      baseURL: `${process.env.API_URL}/${version}${suffix ? `/${suffix}` : ''}`,
      timeout: 60 * (Number(process.env.REACT_APP_HTTP_TIMEOUT) || 1.5) * 1000,
      validateStatus(status) {
        return status >= 200 && status < 300;
      },
    });
    this.requestInterceptors();
    this.responseInterceptors();
  }

  private responseInterceptors() {
    this.httpService.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (Number(error.response.status) >= 500) {
          const serverErrorEvent = new Event('serverError');
          window.dispatchEvent(serverErrorEvent);
        }
        if (error.response.status === 401) {
          const unauthorizedErrorEvent = new Event('unauthorizedError');
          window.dispatchEvent(unauthorizedErrorEvent);
        }
        if (error.code === 'ECONNABORTED') {
          const timeoutErrorEvent = new Event('timeoutError');
          window.dispatchEvent(timeoutErrorEvent);
        }
        return Promise.reject(error);
      }
    );
  }
  private requestInterceptors() {
    this.httpService.interceptors.request.use(
      async (config) => {
        if (!config.headers.Authorization) {
          const token = await getSession();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default BaseAPI;
