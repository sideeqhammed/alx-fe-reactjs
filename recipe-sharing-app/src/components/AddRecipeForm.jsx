import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const addRecipe = useRecipeStore((state) => (state.addRecipe))

  const handleSubmit = (event) => {
    event.preventDefault()
    addRecipe({id: String(Date.now()), title, description})
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{display: 'block', padding: '10px', marginBottom: '10px'}}
      />
      <textarea
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{display: 'block', padding: '10px', marginBottom: '10px'}}
      >
      </textarea>
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm