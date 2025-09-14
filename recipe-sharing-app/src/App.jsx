import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import RecipeDetails from './components/RecipeDetails'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      
      <RecipeDetails />
      <DeleteRecipeButton />

    </>
  )
}

export default App
