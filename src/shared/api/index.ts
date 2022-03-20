import axios, { AxiosRequestConfig } from 'axios';

export interface IAxiosRefreshResponse {
  refreshToken: string;
  accessToken: string;
  username: string;
}

export const API_URL = 'http://www.astra-dev.site:3000';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

// eslint-disable-next-line consistent-return
api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

    return config;
  }
});

api.interceptors.response.use(
  (config) => config,
  // eslint-disable-next-line consistent-return
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        const response = await axios.post<IAxiosRefreshResponse>(`${API_URL}auth/refresh`, {
          access_token: localStorage.getItem('accessToken'),
          refresh_token: localStorage.getItem('refreshToken'),
        });

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        return api.request(originalRequest);
      }
    } catch (e) {
      console.log('==========>e', e);
    }
  },
);

export default api;
