import useRecipeStore from "../store/useRecipeStore";

const RecipeList = () => {

  const recipies = useRecipeStore((state) => state.recipies)

  return (
    <div>
        {recipies.map(recipie => {
          <div key={recipie.id}>
            <h1>{recipie.title}</h1>
            <p>{recipie.description}</p>
          </div>
        })}
    </div>
  )
}

export default RecipeList