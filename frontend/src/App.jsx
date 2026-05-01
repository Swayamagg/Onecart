import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './index.css'
import UserLayout from './components/layouts/userLayout'
import Home from './pages/Home'
import {Toaster} from 'sonner' 
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetail from './components/products/ProductDetail'
import Checkout from './components/cart/Checkout'
import OrderConfirmation from './components/cart/OrderConfirmation'
import OrderDetailsPage from './pages/OrderDetailsPage'
import MyOrders from './pages/MyOrders'
import AdminLayout from './components/admin/AdminLayout'
import AdminHome from './pages/AdminHome'
import UserManage from './components/admin/UserManage'
import ProductManage from './components/admin/ProductManage'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/collections/:collection' element={<CollectionPage/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path='/order/:id' element={<OrderDetailsPage/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminHome/>}/>
          <Route path='users' element={<UserManage/>}/>
          <Route path='products' element={<ProductManage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
