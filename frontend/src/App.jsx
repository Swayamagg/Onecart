import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './index.css'
import UserLayout from './components/layouts/userLayout'
import AdminLayout from './components/layouts/AdminLayout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      {/* <Route path='/admin' element={<AdminLayout/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
