import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipies: [],
  addRecipie: (newRecipie) => set((state) => ({recipies: [...state.recipies, newRecipie]})),
  setRecipie: (recipies) => set({recipies: recipies})
}))

export default useRecipeStore