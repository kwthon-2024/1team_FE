import { create } from 'zustand'

const useUserStore = create((set) => ({
  userId: null,
  watchId: '20241225',
  actions: {
    setWatchId: (id) => set({ watchId: id }),
    setUserId: (id) => set({ userId: id }),
  },
}))

export const useWatchId = () => useUserStore((state) => state.watchId)
export const useUserId = () => useUserStore((state) => state.userId)
export const useUserActions = () => useUserStore((state) => state.actions)
