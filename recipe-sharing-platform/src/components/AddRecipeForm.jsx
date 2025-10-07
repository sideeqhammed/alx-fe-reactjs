function AddRecipeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <input name="recipe" type="text" placeholder="Recipe Title" className="border-1 m-3 mt-8 p-2"/>
      <textarea name="ingredients" placeholder="Ingredients" className="border-1 mx-auto my-3 p-2 block" cols={30} rows={5}></textarea>
      <textarea name="preparation" placeholder="Preparation" className="border-1 mx-auto my-3 p-2 block" cols={30} rows={5}></textarea>
      <button type="submit" className='border-1 px-2 py-1 rounded-xl bg-gray-300 mt-3'>Submit</button>
    </form>
  )
}

export default AddRecipeForm