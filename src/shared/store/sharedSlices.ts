import type { StateCreator } from "zustand";


export interface SharedSlices {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}



export const sharedSlices: StateCreator<SharedSlices> = (set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true })  // Set isOpen to true when opening the modal
  },
  onClose: () => {
    set({ isOpen: false }) // Set isOpen to false when closing the modal
  }
})