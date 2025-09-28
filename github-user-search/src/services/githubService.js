import axios from "axios"


export async function SearchUsers({username, location, minRepos}) {
  try {
    let query = username ? `${username} in:login` : ''
    if (location) query += ` location:${location}`
    if (minRepos) query += ` repos:>=${minRepos}`
    
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    const response = await axios.get(url)
    return(response.data.items)
  } catch (error) {
    throw error
  }
}