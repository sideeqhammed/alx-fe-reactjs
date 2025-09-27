import useNotesStore from "../store/NotesStore";
import { Link } from "react-router-dom";

function Search () {
  const results = useNotesStore(state => state.notesResult)
  const searchWord = useNotesStore(state => state.setSearchTerm)
  const searchResult = useNotesStore(state => state.searchNotes)

  const handleChange = (e) => {
    searchWord(e)
    searchResult()
  }

  return(
    <div>
      <input 
        type="text"
        size={50}
        placeholder="Search notes..."
        onChange={e => handleChange(e.target.value)}
        style={{display: 'flex', padding: '10px', margin: '20px auto'}}
      />
      {results ? (results.map(result => (
        <div>
          <h2 style={{textAlign: 'left'}}>Notes found:</h2>
          <hr></hr>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
        </div>)
      ))
      : ''}

      {/* <Link to={'/'}><button>Recipe List</button></Link> */}
    </div>
  )
}

export default Search