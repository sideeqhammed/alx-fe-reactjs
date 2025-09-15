import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term}),
  filteredRecipes: [],
  filterRecipes: () => set(state => 
    ({filteredRecipes : state.searchTerm === '' ? [] : state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})
  ),
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
  setRecipes: (recipes) => set({recipes}),


  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),


}))

export default useRecipeStore