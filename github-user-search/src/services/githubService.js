import axios from "axios"


const api_key = import.meta.env.VITE_APP_GITHUB_API_KEY

// export async function fetchUserData(username) {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}`)
//     //   , {
//     //   headers : api_key ? {Authorization : `token ${api_key}`} : undefined
//     // })
//     return response.data
//   }
//   catch (error) {
//     console.log ('Error message:', error)
//     throw error
//   }
// }

export async function SearchUsers({username, location, minRepos}) {
  try {
    let query = username ? `${username} in:login` : ''
    if (location) query += ` location:${location}`
    if (minRepos) query += ` repos:>=${minRepos}`
    
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    const response = await axios.get(url)
    return(response.data.items)
  } catch (error) {
    console.log ('Error: ', error)
    throw error
  }
}