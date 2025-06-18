import { create } from "zustand";
import type { ChangePassWordForm, CustomerForm } from "../types/profile.types";
import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { toast } from "sonner";
import { changePassword, updateProfile } from "../services/profileService";

type ProfileActions = {
  updateProfile: (data: CustomerForm) => Promise<void>;
  changePassword: (data: ChangePassWordForm) => Promise<void>;
  setIsEditing: (isEditing: boolean) => void;
  toggleEditing: () => void;
}

type ProfielState = {
  isEditing: boolean;
  isLoading: boolean;
}


export type ProfileStoreType = ProfileActions & ProfielState;

export const useProfileStore = create<ProfileStoreType>((set) => ({
  isEditing: false,
  isLoading: false,
  updateProfile: async (data: CustomerForm) => {
    set({ isLoading: true });
    try {
      const response = await updateProfile(data);
      toast.success(response?.message)
      await useAuthStore.getState().getProfile();
      set({ isEditing: false, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error("Error al actualizar el perfil:", errorMessage);
      toast.error(errorMessage);
    }
  },
  setIsEditing: (isEditing: boolean) => {
    set({ isEditing });
  },
  toggleEditing: () => {
    set((state) => ({ isEditing: !state.isEditing }));
  },
  changePassword: async (data: ChangePassWordForm) => {
    set({ isLoading: true });
    try {
      const response = await changePassword(data);
      toast.success(response?.message);
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error("Error al cambiar la contraseña:", errorMessage);
      toast.error(errorMessage);
    }
  }

}))