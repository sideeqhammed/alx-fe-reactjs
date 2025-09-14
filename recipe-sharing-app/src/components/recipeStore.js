import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
  setRecipe: (recipes) => set({recipes: recipes})
}))

export default useRecipeStore