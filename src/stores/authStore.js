import { create } from 'zustand'

const useAuthStore = create((set) => ({
  confirmId: null,
  isValid: false,

  actions: {
    setConfirm: (id) => set({ confirm: id }),
    setIsValid: () => set({ isValid: true }),
  },
}))

export const useConfirmId = () => useAuthStore((state) => state.confirmId)
export const useIsValid = () => useAuthStore((state) => state.isValid)
export const useAuthActions = () => useAuthStore((state) => state.actions)
