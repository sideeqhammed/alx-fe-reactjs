import useRecipeStore from "./recipeStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = () => {

  const navigate = useNavigate()
  const [id, setId] = useState('')
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    deleteRecipe(id)
    setId('')
    navigate('/')
  }

  return (
    <div>
      <h2>Delete recipe</h2>
      <input style={{padding: '10px'}}
        type="text"
        value={id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="Recipe id"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteRecipeButton