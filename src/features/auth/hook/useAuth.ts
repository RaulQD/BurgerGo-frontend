import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";


export const useAuth = () => {
  const { token, profile, isInitialized, loading, initializeAuth } = useAuthStore();
  useEffect(() => {
    if (!isInitialized) {
      initializeAuth()
    }
  }, [isInitialized, initializeAuth]);
  return {
    token,
    profile,
    isInitialized,
    loading,
    isAuthenticated: !!token && !!profile,
    isAppLoading: !isInitialized,
    isProfileLoading: loading || (token && !profile)
  }
}