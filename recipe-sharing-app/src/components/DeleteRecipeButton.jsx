import useRecipeStore from "./recipeStore";
import { useState } from "react";

const DeleteRecipeButton = () => {

  const [id, setId] = useState('')
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    deleteRecipe(id)
    setId('')
  }

  return (
    <div>
      <h2>Delete recipe</h2>
      <input style={{padding: '10px'}}
        type="text"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="Recipe to remove"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteRecipeButton