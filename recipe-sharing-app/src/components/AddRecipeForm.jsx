import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";

const AddRecipieForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const addRecipie = useRecipeStore((state) => (state.addRecipie))

  const handleSubmit = (event) => {
    event.preventDefault()
    addRecipie({id: Date.now(), title, description})
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      >
      </textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddRecipieForm