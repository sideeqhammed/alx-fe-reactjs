import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<RecipeList />} />
          <Route path='/add' element = {<AddRecipeForm />} />
          <Route path='/search' element = {<RecipeDetails />} />
          <Route path='/edit' element = {<EditRecipeForm />} />
          <Route path='/delete' element = {<DeleteRecipeButton />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
