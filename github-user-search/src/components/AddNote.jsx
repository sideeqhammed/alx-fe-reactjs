import { useState } from "react"
import useNotesStore from "../store/NotesStore"


function AddNote () {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const addNote = useNotesStore((state) => state.addNotes)

  const handleSubmit = (event) => {
    event.preventDefault()
    addNote({id:String(Date.now()), title, content})
    setTitle('')
    setContent('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        name="title" 
        placeholder="Note title"
        onChange={e => setTitle(e.target.value)}
        style={{display: 'flex', padding: '10px', margin: '20px auto'}}
      />
      <textarea 
        value={content}
        name="content"
        placeholder="Note content"
        cols={40}
        rows={7}
        onChange={(e) => setContent(e.target.value)}
        style={{display: 'flex', padding: '10px', margin: '20px auto'}}
      >
      </textarea>
      <button type="submit">Add Note</button>
    </form>
  )
}

export default AddNote