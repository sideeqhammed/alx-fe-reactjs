import useRecipeStore from "./recipeStore";
import { useState } from "react";

const DeleteRecipeButton = () => {

  const [title, setTitle] = useState('')
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    deleteRecipe(title)
    setTitle('')
  }

  return (
    <div>
      <h2>Delete recipe</h2>
      <input style={{padding: '10px'}}
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe to remove"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteRecipeButton