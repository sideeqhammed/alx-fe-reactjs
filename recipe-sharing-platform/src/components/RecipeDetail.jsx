import { Link, useParams } from "react-router-dom"
import data  from '../data.json'
import { useEffect, useState } from "react"

function RecipeDetail () {
  const [recipeId, setRecipeId] = useState('')
  const { id } = useParams()
  useEffect(() => {
    setRecipeId(id)
  }, [])
  const recipe = data.find((item) => item.id === Number(recipeId))
  if (!recipe) {
    return (
      <div>
        <h2>Recipe not Found</h2>
        <p>{id}</p>

      </div>
    )
  }

  return (
    <div className=" mx-auto max-w-2xl xl:max-w-3xl text-center">
      <Link to='/' className="mx-3 mt-5 block text-start">⬅️ Back to recipes</Link>
      <h2 className="font-bold text-2xl mx-5 my-10 ">Recipe: {recipe.title}</h2>
      <img className="mx-auto h-20 w-20" src={recipe.image} alt={recipe.title}/>
      <p className="mx-4 my-5">Detail: {recipe.summary}</p>
      <p>ingredients</p>
      <p>instructions</p>
    </div>
  )
}

export default RecipeDetail