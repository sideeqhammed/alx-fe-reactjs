import useRecipeStore from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = () => {
  
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const updateRecipe = useRecipeStore((state) => (state.updateRecipe))

  const handleUpdate = (event) => {
    event.preventDefault()
    updateRecipe(id, title, description)
    setId('')
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update recipe</h2>
      <input 
        type="text"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="Recipe id"
      />
      <input 
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New title"
      />
      <textarea
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New description"
      ></textarea>
      <button type="submit">Update</button>
    </form>
  )
}

export default EditRecipeForm