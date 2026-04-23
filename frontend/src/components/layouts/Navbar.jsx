import {Link} from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingBag} from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Search from '../common/Search'
import CartDrawer from './CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
     const [drawerOpen,setDrawerOpen]=useState(false)
     const [navDrawer,setNavDrawer]=useState(false)
    const toggleCartDrawer=()=>{
        setDrawerOpen(!drawerOpen)
    }
    const toggleNavDrawer=()=>{
        setNavDrawer(!navDrawer)
    }
  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
            <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>OneCart</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top wear</Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom wear</Link>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to="/login" className='hover:text-black'><HiOutlineUser className='h-6 w-6 text-gray-700'/></Link>
            <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                <span className='absolute -top-1 bg-red-500 text-xs  rounded-full px-2 py-0.5'>4</span>
            </button>
            <Search/>
            <button onClick={toggleNavDrawer} className='md:hidden'><HiBars3BottomRight className='h-6 w-6 text-gray-700'/></button>
        </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawer ? "translate-x-0" : "-translate-x-full"}`}>
     <div className='flex justify-end p-4'> 
        <button ><IoMdClose onClick={toggleNavDrawer} className='h-6 w-6 text-gray-600'/></button>
     </div>
     <div className='p-4'>
        <h2 className='text-xl font-semibold mb-4'>Menu</h2>
        <nav className='space-x-4'>
            <Link to="#" onClick={toggleNavDrawer} className='block hover:text-black text-gray-600'>Men</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block hover:text-black text-gray-600'>Women</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block hover:text-black text-gray-600'>Top Wear</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block hover:text-black text-gray-600'>Bottom Wear</Link>
        </nav>
     </div>
    </div>
  </>
  )
}

export default Navbar