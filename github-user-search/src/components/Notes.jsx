import useNotesStore from "../store/NotesStore"

function Notes () {
  const notes = useNotesStore(state => state.notes)
  return (
    <div>
      <h2 style={{textAlign: 'left', fontWeight: 'bolder'}}>My Notes</h2>
      <hr></hr>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default Notes