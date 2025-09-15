import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchedRecipe: null,
  addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => (recipe.id !== id))})),
  searchRecipe: (id) => set((state) => ({searchedRecipe: state.recipes.find((recipe) => (recipe.id === id))})),
  updateRecipe: (recipeId, newTitle, newDescription) => set(state => ({recipes: state.recipes.map((recipe) => {
    if (recipe.id === recipeId) {
      return {...recipe, title: newTitle, description: newDescription}
    }
    else return recipe
  })})),
  setRecipes: (recipes) => set({recipes})
}))

export default useRecipeStore