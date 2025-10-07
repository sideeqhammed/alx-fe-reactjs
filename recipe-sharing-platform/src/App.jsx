import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetail from './components/RecipeDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
        <Route path='/recipe/add' element= {<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
