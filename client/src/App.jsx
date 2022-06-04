import { Routes, Route } from 'react-router-dom'
import { Landing } from './React-components/Landing/Landing'
import { Home } from './React-components/Home/Home'
import { CreateRecipe } from './React-components/CreateRecipe/CreateRecipe'
import { _404 } from './React-components/_404/_404'
import Global from './styles/Global.styles'
import { DetailRecipes } from './React-components/DetailRecipes/DetailRecipes'

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="create" element={<CreateRecipe />} />
          <Route path="home" element={<Home />} />
          <Route exact path="home/:id" element={<DetailRecipes />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
