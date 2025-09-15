import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      <EditRecipeForm />
      <DeleteRecipeButton />

    </>
  )
}

export default App
