import {create} from 'zustand'

// const useNotesStore (set)
const useNotesStore = create((set) => ({
  notes : [],
  addNotes : (newNote) => set((state) => ({notes : [...state.notes, newNote]})),
  notesResult : [],
  searchTerm : '',
  setSearchTerm : (term) => set({searchTerm : term}),
  searchNotes : () => set(state => ({notesResult : state.searchTerm === ''? [] : state.notes.filter(note => note.title.toLowerCase().includes(state.searchTerm.toLowerCase()))}))
}))

export default useNotesStore