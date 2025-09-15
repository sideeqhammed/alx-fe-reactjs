import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
  deleteRecipe: (title) => set((state) => ({recipes: state.recipes.filter(recipe => (title !== recipe.title))})),
  getDetailsRecipe: (id) => set((state) => ({recipes: state.recipes.find(recipe => (id === recipe.id))})),
  updateRecipe: (recipeId, newTitle) => set(state => ({recipes: state.recipes.map((recipe) => {
    if (recipe.id === recipeId) {
      return {...recipe, title = newTitle}
    }
  })})),
  setRecipes: (recipes) => set({recipes})
}))

export default useRecipeStore