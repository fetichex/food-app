import { Routes, Route } from 'react-router-dom'
import { Landing } from './React-components/Landing/Landing'
import { Home } from './React-components/Home/Home'
import { RecipeDetail } from './React-components/RecipeDetail/RecipeDetail'
import { CreateRecipe } from './React-components/CreateRecipe/CreateRecipe'
import { _404 } from './React-components/_404/_404'
import Global from './styles/Global.styles'
import { Application } from './app.styles'

function App() {
  return (
    <>
      <Global />
      <Application className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route exact path="/detail/:id" element={<RecipeDetail />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </Application>
    </>
  )
}

export default App
