import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {

  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const handleSearch = (e) => {
    setSearchTerm(e)
    filterRecipes()
  }
  

  return (
    <div>
      {filteredRecipes ? (
        filteredRecipes.map(recipe => (
          <div key={Date.now()}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : ''}
      <input
        type="text"
        size={50}
        placeholder="Search recipes..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar