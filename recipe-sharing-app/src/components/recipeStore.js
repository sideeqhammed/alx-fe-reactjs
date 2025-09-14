import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
  deleteRecipe: (title) => set((state) => ({recipes: state.recipes.filter(recipe => (title !== recipe.title))})),
  getDetailsRecipe: (id) => set((state) => ({recipes: state.recipes.find(recipe => (id === recipe.id))})),
  setRecipes: (recipes) => set({recipes})
}))

export default useRecipeStore