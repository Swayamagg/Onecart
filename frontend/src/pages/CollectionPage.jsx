import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/products/FilterSidebar';
import SortOptions from '../components/products/SortOptions';
import ProductGrid from '../components/products/ProductGrid';
const CollectionPage = () => {
  const [products,setProducts]=useState([])
  const sidebarRef=useRef(null)
  const [isSideBar,setIsSideBar]=useState(false)
  const toggleSidebar=()=>{
    setIsSideBar(!isSideBar)
  }

  const handleClickOutside=(e)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIsSideBar(false)
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown",handleClickOutside)
    document.removeEventListener("mousedown",handleClickOutside)
  })
  useEffect(()=>{
    setTimeout(() => {
      const fetchedProucts=[
        {
            _id:1,
            name:"Product 1",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=3"}]
        },
          {
            _id:2,
            name:"Product 2",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=4"}]
        },
          {
            _id:3,
            name:"Product 3",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=5"}]
        },
          {
            _id:4,
            name:"Product 4",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=6"}]
        },
        {
            _id:5,
            name:"Product 1",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=7"}]
        },
          {
            _id:6,
            name:"Product 2",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=8"}]
        },
          {
            _id:7,
            name:"Product 3",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=9"}]
        },
          {
            _id:8,
            name:"Product 4",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=10"}]
        },
      ]
      setProducts(fetchedProucts)
    }, 1000);
  },[]);
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Mobile Filter Button */}
        <button onClick={toggleSidebar} className='lg:hidden p-2 border flex justify-center items-center'>
          <FaFilter className='mr-2'/> Filters
        </button>
        {/* Filter Sidebar */}
        <div ref={sidebarRef} className={`${isSideBar ? "translate-x-0" : "translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
          <FilterSidebar/>
        </div>
        <div className='flex-grow p-4'>
          <h2 className='text-2xl uppercase mb-4'>All Collections</h2>
          {/* Sort Options */}
          <SortOptions/>
          <ProductGrid products={products}/>
        </div>
    </div>
  )
}

export default CollectionPage