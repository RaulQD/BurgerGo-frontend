
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { sharedSlices, type SharedSlices } from './sharedSlices';

// This is a placeholder for the actual implementation of the store.
// You would typically import your slices and combine them here.
// For example, you might have slices for modal state, user state, etc.
export const useAppStore = create<SharedSlices>()(
  devtools((...args) => ({
    ...sharedSlices(...args),
  }), { name: 'AppStore' })
)