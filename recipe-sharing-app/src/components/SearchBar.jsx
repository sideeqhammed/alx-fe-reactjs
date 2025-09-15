import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

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
      
      <input
        type="text"
        size={50}
        placeholder="Search recipes..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {filteredRecipes ? (
        filteredRecipes.map(recipe => (
          <div key={Date.now()}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : ''}

      <Link to={'/'}><button>Recipe List</button></Link>

    </div>
  );
};

export default SearchBar