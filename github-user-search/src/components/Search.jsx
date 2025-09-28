import { useState } from "react"
// import { fetchUserData } from "../services/githubService"
import { SearchUsers } from "../services/githubService"

const SearchUser = () => {

  const [username, setUsername] = useState('')
  // const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState(0)
  const [users, setUsers] = useState([])


  // const handleChange = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   try {
  //     const result = await fetchUserData(username)
  //     setUser(result)
  //     setError(null)
  //   } catch (error) {
  //     setError("Looks like we cant find the user")
  //     setUser(null)
  //   } finally {setLoading(false)}
  // }

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setUsers([])
    setError(null)
    try {
      const results = await SearchUsers({username, location, minRepos})
      setUsers(results)
    } catch (error) {
      console.error(`Error: ${error}`)
      setError('Looks like we cant find the user')
    } finally {
      setLoading(false)
    }
  }

  return(
    <div>
      {/* <form onSubmit={handleChange}>
        <input 
          type="text"
          size={50}
          placeholder="Search user..."
          onChange={e => setUsername(e.target.value)}
          style={{display: 'flex', padding: '10px', margin: '20px auto', borderColor : 'white'}}
        />
        <button type="submit" style={{marginBottom: '30px'}}>Search</button>
      </form> */}

      <form onSubmit={handleSearch}>
        <input 
          type="text"
          size={50}
          placeholder="Search user..."
          onChange={e => setUsername(e.target.value)}
          style={{display: 'flex', padding: '10px', margin: '20px auto', borderColor : 'white'}}
        />
        <input
          type="text"
          size={50}
          placeholder="Search using location..."
          onChange={(e) => setLocation(e.target.value)}
          className="flex p-3 my-5 border-white"
        />
        <input
          type="number"
          placeholder="Search using minimum repository..."
          onChange={(e) => setMinRepos(e.target.value)}
          className="flex p-3 my-5 border-white"
        />
        <button type="submit" style={{marginBottom: '30px'}}>Search</button>
      </form>

      {loading ? <p>Loading...</p> : ''}

      {/* {user ?
        <div>
          <h2 style={{textAlign: 'left'}}>User found:</h2>
          <hr />
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
        </div>
        : error
      } */}

      {users && users.length > 0 ? 
        users.map((user) => (
          <div key={user.id}>
            <h2 style={{textAlign: 'left'}}>Users found:</h2>
            <hr />
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
            <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
            <p>{user.location}</p>
            <p>{user.minRepos}</p>
          </div>
        ))
        : error
      }
    </div>
  )
}

export default SearchUser