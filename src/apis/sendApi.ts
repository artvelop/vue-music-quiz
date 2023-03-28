import api from './api';

export default {
  get: async (url: string, params?: any) => {
    return params !== undefined
      ? api({
          url: url,
          method: 'get',
          params: params,
        })
      : api({
          url: url,
          method: 'get',
        });
  },
  post: async (url: string, params: any) => {
    return params !== undefined
      ? api({
          url: url,
          method: 'post',
          data: params,
        })
      : api({
          url: url,
          method: 'post',
        });
  },
  put: async (url: string, params: any) => {
    return params !== undefined
      ? api({
          url: url,
          method: 'put',
          data: params,
        })
      : api({
          url: url,
          method: 'put',
        });
  },
  delete: async (url: string, params?: any) => {
    return params !== undefined
      ? api({
          url: url,
          method: 'delete',
          data: params,
        })
      : api({
          url: url,
          method: 'delete',
        });
  },
};
