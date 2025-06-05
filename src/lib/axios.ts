import { useStore } from '@/features/auth/store/useStore';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(
  (config) => {
  const token = useStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
)
//LIMPIA EL TOKEN SI LA RESPUESTA ES 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useStore.getState().clearToken();
    }
    return Promise.reject(error);
  }
)

export default api;