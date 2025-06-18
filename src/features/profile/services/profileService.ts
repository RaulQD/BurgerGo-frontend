import api from "@/lib/axios";
import type { ChangePassWordForm, CustomerForm, CustomerResponse } from "../../profile/types/profile.types";
import { isAxiosError } from "axios";


export const updateProfile = async (formData: CustomerForm) => {
  try {
    const { data } = await api.put<CustomerResponse>('/auth/update-customer-profile', formData)
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error al obtener el perfil del cliente:", error);
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}
export const changePassword = async (passwordData: ChangePassWordForm) => {
  try {
    const { data } = await api.patch<CustomerResponse>('/auth/change-password', passwordData);
    console.log(data.message);
    return data;
  } catch (error) {
    console.log("Error al obtener el perfil del cliente:", error);
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}