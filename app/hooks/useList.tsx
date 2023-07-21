import { create } from 'zustand'

export type Item = {
  id: number
  name: string
}

type Items = Array<Item>

interface listState {
  items: Items
}

const mockData = [
  {
    id: 1,
    name: 'apple',
  },
  {
    id: 2,
    name: 'orange',
  },
  {
    id: 3,
    name: 'banana',
  },
]

export const useList = create<listState>((set) => ({
  items: [...mockData],
  addItem: (item: Item) => set((state) => ({ items: [...state.items, item] })),
}))
