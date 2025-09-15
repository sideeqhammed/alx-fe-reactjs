import useRecipeStore from "./recipeStore";
import { useState } from "react";

const RecipeDetails = ({ recipeId }) => {
  const [id, setId] = useState('')
  const searchRecipe = useRecipeStore(state => state.searchRecipe);
  const recipe = useRecipeStore(state => state.searchedRecipe)

  const handleFind = () => {
    searchRecipe(id)
    setId('')
  }

  return (
    <div>
      <h2>Search recipe by id</h2>
      {recipe ? (
        <div key={recipe.id}>
          <h3>Recipe Id: {recipe.id}</h3>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ): (
        <p>Recipe not found</p>
      )}
      <input style={{padding: '10px'}}
        type="text"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="Recipe id"
      />
      <button onClick={handleFind}>Search</button>
    </div>
  );
};

export default RecipeDetails