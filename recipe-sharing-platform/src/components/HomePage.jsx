import { useState, useEffect } from 'react'
import data from '../data.json'

function HomePage () {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(data)
  }, [])
  return(
    <div className=' text-center mx-6'>
      <h1 className='text-4xl font-bold mx-auto my-3'>Welcome to Recipez</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center'>
        {recipes.map(recipe => (
        <div key={recipe.id} className='w-xs h-90 my-9 bg-gray-300 shadow-xl hover:scale-103 rounded-xl duration-500 ease-in-out' >
          <img src={recipe.image} alt={recipe.title} className='mx-auto w-40 h-40 my-3 rounded-2xl' />
          <h2 className='font-bold text-lg mt-6 mb-2 p-2'>{recipe.title}</h2>
          <p className='p-2'>{recipe.summary}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomePage