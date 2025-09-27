import { useState } from "react"
import { fetchUserData } from "../services/githubService"

const SearchUser = () => {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await fetchUserData(username)
      setUser(result)
      setError(null)
    } catch (error) {
      setError(error)
      setUser(null)
    } finally {setLoading(false)}
  }

  return(
    <div>
      <form onSubmit={handleChange}>
        <input 
          type="text"
          size={50}
          placeholder="Search user..."
          onChange={e => setUsername(e.target.value)}
          style={{display: 'flex', padding: '10px', margin: '20px auto'}}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? <p>Loading...</p> : ''}
      {user ?
        <div>
          <h2 style={{textAlign: 'left'}}>User found:</h2>
          <hr></hr>
          <h2>{user.name}</h2>
          <p>{user.url}</p>
          <p>{user.bio}</p>
        </div>
      
      : ''}

      {/* <Link to={'/'}><button>Recipe List</button></Link> */}
    </div>
  )
}

export default SearchUser