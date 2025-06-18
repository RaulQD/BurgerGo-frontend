import { isAxiosError } from "axios";
import { CustomerProfileSchema, type LoginFormData, type LoginResponse } from "../types/auth.types";
import api from "@/lib/axios";

export const loginCustomer = async (formData: LoginFormData) => {
  try {
    const { data } = await api.post<LoginResponse>('/auth/customer', formData);
    console.log("Respuesta del login:", data);
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
    const response = CustomerProfileSchema.safeParse(data);
    console.log("Perfil del cliente:", response);
    if (response.success) {
      return response.data; // Aquí puedes devolver el perfil validado
    } else {
      console.error("❌ Error de validación Zod:", response.error.format());
      throw new Error("Perfil recibido en formato inválido");
    }
  } catch (error) {
    console.log("Error al obtener el perfil del cliente:", error);
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}