import { useState } from "react"
import useRecipeStore from "./recipeStore"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"


const RecipeList = () => {

  // const [visible, setVisible] = useState(true)
  const recipes = useRecipeStore((state) => state.recipes)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const favorite = useRecipeStore(state => state.favorite)
  const handleFavorite = (recipe) => {
    addFavorite(recipe)
    recipe.isFavorite = true
  }

  console.log({recipes})
  // console.log(visible)

  return (
    <div>
      <Link to={'/search'}><SearchBar /></Link>
      <div style={{border: '1px solid white', marginBottom: '20px'}}>
        <h2 style={{borderBottom: 'solid white'}}>Recipie List</h2>
        {recipes.map(recipe => {
          const isFavorite = recipe.isFavorite 
          return (
            <div key={recipe.id} style={{paddingBottom: '10px', borderBottom: '1px solid white'}}>
              <h3>Recipe Id: {recipe.id}</h3>
              <h3>Recipe: {recipe.title}</h3>
              <p>Description: {recipe.description}</p>
              {recipe.isFavorite === false ? (<button onClick={() => handleFavorite(recipe)}>Add to Fav</button>) : <p>Added to favorites</p> }
              
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default RecipeList