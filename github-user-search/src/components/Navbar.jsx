import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', minWidth: '800px', alignItems: 'center', backgroundColor: 'darkgray', padding: '10px', borderRadius: '10px'}}>
      <h2>Notes App</h2>
      <div>
        <Link to= '/' style={{padding: '0 10px'}}>All Notes</Link>
        <Link to={'/add'} style={{padding: '0 10px'}}>Add Note</Link>
        <Link to={'/search'} style={{padding: '0 10px'}}>Search Notes</Link>
      </div>
    </div>
  )
}

export default Navbar