import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import Landing from './components/Landing'
import SignUp from './components/SignUp'

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App  
