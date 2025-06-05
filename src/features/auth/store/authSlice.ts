import { type StateCreator } from "zustand";


export type AuthActions = {
  setToken: (token: string) => void;
  setLoading: (loading: boolean) => void;
  clearToken: () => void;
}
export type AuthState = {
  token: string;
  loading?: boolean;
}
export type AuthSliceType = AuthState & AuthActions;

export const createAuthSlice: StateCreator<AuthSliceType> = (set) => ({
  token: '',
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: '' }),
})