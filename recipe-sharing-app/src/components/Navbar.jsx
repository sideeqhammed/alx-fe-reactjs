import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div className="navbar" style={{backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', marginBottom: '20px'}}>
      <h1>My Recipes</h1>
      <div>
        <Link to='/' style={{padding: '0 10px'}}>Recipes</Link>
        <Link to='/add' style={{padding: '0 10px'}}>Add Recipe</Link>
        <Link to='/favorites' style={{padding: '0 10px'}}>Favorites</Link>
        {/* <Link to={'/search'} style={{padding: '0 10px'}}>Search Recipe</Link> */}
        <Link to={'/details'} style={{padding: '0 10px'}}>Search Recipes</Link>
        <Link to={'/recommendations'} style={{padding: '0 10px'}}>Recommended Recipes</Link>
        <Link to={'/edit'} style={{padding: '0 10px'}}>Edit Recipe</Link>
        <Link to={'/delete'} style={{padding: '0 10px'}}>Delete Recipe</Link>
      </div>
    </div>
  )
}

export default Navbar