import { create } from "zustand";
import { createAuthSlice, type AuthSliceType } from "./authSlice";
import { devtools, persist } from "zustand/middleware";
// import { createUserSlice, type UserSliceType } from "./userSlice";




export const useAuthStore = create<AuthSliceType >()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          token: state.token,
        })}
    )
  )
);