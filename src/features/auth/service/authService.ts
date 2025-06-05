import { isAxiosError } from "axios";
import type { LoginFormData, LoginResponse } from "../types/auth.types";
import api from "@/lib/axios";

export const loginCustomer = async (formData: LoginFormData) => {
  try {
    const { data } = await api.post<LoginResponse>('/auth/customer', formData);
    console.log('Login response:', data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}

export const getProfile = async () => {
  try {
    const { data } = await api.get('/auth/profile');
    console.log('Profile data:', data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}