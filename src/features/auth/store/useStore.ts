import { create } from "zustand";
import { createAuthSlice, type AuthSliceType } from "./authSlice";
import { persist } from "zustand/middleware";
import { createUserSlice, type UserSliceType } from "./userSlice";




export const useStore = create<AuthSliceType & UserSliceType>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUserSlice(...a)
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        token: state.token,
      }),
    }
  )
);