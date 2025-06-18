import { type StateCreator } from "zustand";
import type { CustomerProfile, LoginFormData } from "../types/auth.types";
import { getProfile, loginCustomer } from "../service/authService";
import { toast } from "sonner";


type AuthActions = {
  login: (data: LoginFormData, onClose?: () => void) => Promise<void>;
  getProfile: () => Promise<void>;
  setToken: (token: string) => void;
  setLoading: (loading: boolean) => void;
  clearToken: () => void;
  logout: () => void;
  // loadProfile: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}
type AuthState = {
  token: string | null;
  loading?: boolean;
  profile: CustomerProfile | null;
  isInitialized?: boolean;

}
export type AuthSliceType = AuthState & AuthActions;

export const createAuthSlice: StateCreator<AuthSliceType> = (set, get) => ({
  token: null,
  loading: false,
  profile: null,
  isInitialized: false,
  setLoading: (loading: boolean) => set({ loading }),
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  logout: () => {
    localStorage.removeItem('auth-storage');
    set({ token: null, profile: null });
  },
  initializeAuth: async () => {
    const { isInitialized, token } = get();
    if (isInitialized) return;
    set({ loading: true });
    try {
      if (token) {
        const data = await getProfile();
        set({ isInitialized: true, profile: data });
      } else {
        set({ isInitialized: true, profile: null });
      }
    } catch (error) {
      console.log('Error initializing auth:', error);
      set({ token: null, profile: null, isInitialized: true });
      toast.error('Error al inicializar la autenticación. Por favor, inicia sesión nuevamente.');
    } finally {
      set({ loading: false });
    }
  },
  // loadProfile: async () => {
  //   try {
  //     const { profile } = get();
  //     if (profile) {
  //       return;
  //     }
  //     set({ loading: true });
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     const data = await getProfile();
  //     set({ profile: data, loading: false });
  //   } catch (error) {
  //     localStorage.removeItem('auth-storage');
  //     console.error('Error loading profile:', error);
  //     set({ token: null, profile: null });
  //     toast.error('Error al cargar el perfil. Por favor, inicia sesión nuevamente.');
  //   } finally {
  //     set({ loading: false });
  //   }
  // },
  getProfile: async () => {
    try {
      set({ loading: true });
      const data = await getProfile();
      set({ profile: data, loading: false });
    } catch (error) {
      console.error('Error getting profile:', error);
      // Si hay error, limpiar el token (probablemente expiró)
      set({ token: null, profile: null, loading: false });
    }
  },
  login: async (data, onClose) => {
    try {
      set({ loading: true });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      //Aqui se llama al servicio de inici de sesión
      const response = await loginCustomer(data);
      if (response) {
        set({ token: response.access_token });
        toast.success(response.message);
        await get().initializeAuth();
        if (onClose) onClose();
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      toast.error(errorMessage);
    } finally {
      set({ loading: false });
    }
  }
})