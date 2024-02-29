import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Bussiness from './pages/Business'
import Education from './pages/Education'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/business' element={<Bussiness/>} />
          <Route path='/education' element={<Education/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
