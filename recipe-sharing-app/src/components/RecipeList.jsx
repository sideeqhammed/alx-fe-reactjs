import useRecipeStore from "./recipeStore"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const RecipeList = () => {

  const recipes = useRecipeStore((state) => state.recipes)

  console.log({...recipes})

  return (
    <div>
      <Link to={'/search'}><SearchBar /></Link>
      <div style={{border: '1px solid white', marginBottom: '20px'}}>
        <h2 style={{borderBottom: 'solid white'}}>Recipie List</h2>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{paddingBottom: '10px', borderBottom: '1px solid white'}}>
            <h3>Recipe Id: {recipe.id}</h3>
            <h3>Recipe: {recipe.title}</h3>
            <p>Description: {recipe.description}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default RecipeList