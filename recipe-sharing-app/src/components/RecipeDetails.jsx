import useRecipeStore from "./recipeStore";
import { useState } from "react";

const RecipeDetails = ({ recipeId }) => {
  const [id, setId] = useState('')
  const searchRecipe = useRecipeStore(state => state.searchRecipe);
  const recipeResult = useRecipeStore(state => state.searchedRecipe)

  const handleFind = () => {
    searchRecipe(id)
    setId('')
  }

  return (
    <div>
      <h2>Find recipe</h2>
      {recipeResult ? (
        <div key={recipeResult.id}>
          <h3>Recipe Id: {recipeResult.id}</h3>
          <h3>{recipeResult.title}</h3>
          <p>{recipeResult.description}</p>
        </div>
      ): (
        <p>Recipe not found</p>
      )}
      <input style={{padding: '10px'}}
        type="text"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="Recipe to find"
      />
      <button onClick={handleFind}>Search</button>
    </div>
  );
};

export default RecipeDetails