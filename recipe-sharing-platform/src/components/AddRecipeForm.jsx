import { useState } from "react"

function AddRecipeForm() {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [preparation, setPreparation] = useState('')
  const [errors, setErrors] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(title && ingredients && preparation)) {setErrors(true)} else {setErrors(false)}
  }
  return (
    <form className="w-xl md:w-2xl mx-auto my-3 text-center p-5 shadow-xl rounded-xl" onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl mt-5">Add Recipe</h1>
      <input name='title' value={title} type="text" placeholder="Recipe Title" onChange={(e) => setTitle(e.target.value)} className="border-1 m-3 mt-8 p-2"/>
      <textarea name="ingredients" value={ingredients} placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)} className="border-1 mx-auto my-3 p-2 block" cols={30} rows={5}></textarea>
      <textarea name="preparation_steps" value={preparation} placeholder="Preparation" onChange={(e) => setPreparation(e.target.value)} className="border-1 mx-auto my-3 p-2 block" cols={30} rows={5}></textarea>
      {errors ? <p className="text-red-600">Recipe form not fully filled, please fill all</p> : ''}
      <button type="submit" className='border-1 px-2 py-1 rounded-xl bg-gray-300 mt-3'>validate</button>
    </form>
  )
}

export default AddRecipeForm