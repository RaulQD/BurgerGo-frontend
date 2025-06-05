import type { StateCreator } from "zustand";
import type { CustomerResponse } from "../types/auth.types";
import { getProfile } from "../service/authService";

type UserState = {
  profile: CustomerResponse | null;
}
type UserActions = {
  getProfile: () => Promise<void>
}

export type UserSliceType = UserState & UserActions;


export const createUserSlice: StateCreator<UserSliceType> = ((set) => ({
  profile: null,
  getProfile: async () => {
    const data = await getProfile();
    set({ profile: data });
  }
}))