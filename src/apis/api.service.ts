import { settings } from '@/constants/settings';
import axios, { Axios, AxiosError } from 'axios';

const API_TIMEOUT = 50000;
const LOCAL_AUTH_TOKEN = 'AUTH_TOKEN';
const BASE_URL = 'https://opentdb.com';

interface FormatError extends Error {
  name: string;
  message: string;
  status: number | string | undefined;
  data: any;
}

interface FormatErrorParams {
  code: string | number;
  status?: number;
  data: any;
}

export class ApiService {
  public api;

  constructor() {
    const api = axios.create({
      baseURL: BASE_URL,
      timeout: API_TIMEOUT,
      withCredentials: false,
    });

    api.interceptors.request.use(config => {
      const token = localStorage.getItem(LOCAL_AUTH_TOKEN);

      if (token === null) return config;

      config.headers.Authorization = 'Bearer ' + token;

      return config;
    });

    api.interceptors.response.use(null, (err: AxiosError) => {
      const status = err.response?.status;
      const errorData = err.response?.data;

      if (err.response?.status) {
        return this.formatError({
          code: 'ERROR',
          status,
          data: errorData,
        });
      }
    });

    this.api = api;
  }

  private formatError({ code, status = 0, data = {} }: FormatErrorParams): Promise<FormatError> {
    return Promise.reject({
      name: 'xhrError',
      message: code,
      status: status,
      data: data,
    });
  }
}
