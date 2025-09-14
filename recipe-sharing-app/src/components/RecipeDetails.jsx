import useRecipeStore from "./recipeStore";
import { useState } from "react";

const RecipeDetails = ({ recipeId }) => {
  const [id, setId] = useState('')
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const handleFind = () => {
    recipe(id)
    setId('')
  }

  return (
    <div>
      <h2>Find recipe</h2>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
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