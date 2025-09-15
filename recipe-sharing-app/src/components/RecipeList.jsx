import useRecipeStore from "./recipeStore"
import SearchBar from "./SearchBar"

const RecipeList = () => {

  const recipes = useRecipeStore((state) => state.recipes)

  console.log({...recipes})

  return (
    <div>
      <SearchBar />
      <div style={{border: '1px solid white', marginBottom: '20px'}}>
        <h2 style={{borderBottom: 'solid white'}}>Recipie List</h2>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{paddingBottom: '10px', borderBottom: '1px solid white'}}>
            <h3>Recipe Id: {recipe.id}</h3>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default RecipeList