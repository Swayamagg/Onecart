import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const ProductDetail = () => {
    const products={
        name:"Stylish Jacket",
        price:120,
        originalPrice:150,
        description:"This is stylish jacket perfect for any occasion",
        brand:"FashionBrand",
        material:"Leather",
        size:["S","M","L","XL"],
        color:["White","Black"],
        images:[
              {
                url:"https://picsum.photos/500/500?random=1",
                altText:"Stylish Jacket 1"
              },
               {
                url:"https://picsum.photos/500/500?random=2",
                altText:"Stylish Jacket 2"
              },
        ],
    };
    const similiarProducts=[
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
    ]
    const [mainImage,setMainImage]=useState("")
    const [selectSize,setSelectSize]=useState("")
    const [selectColor,setSelectColor]=useState("")
    const [quantity,setQuantity]=useState(1)
    const [buttonDisabled,setButtonDisabled]=useState("")

    useEffect(()=>{
        if(products?.images?.length>0){
            setMainImage(products.images[0].url)
        }
    },[]);
    const handleQuantityChange=(action)=>{
      if(action === "plus") setQuantity((prev)=>prev+1)
      if(action === "minus" && quantity>1) setQuantity((prev)=>prev-1)
    }
const handleAddToCart=()=>{
    if(!selectSize || !selectColor){
        toast.error("Please select a size and color before adding to cart.",{duration:1000});
    return;
    }
    setButtonDisabled(true)
    setTimeout(() => {
        toast.success("Product added to cart.",{duration:1000});
        setButtonDisabled(false)
    },500)
}
  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex md:flex-row flex-col'>
                {/* Left Thumbnails */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {products.images.map((image,index)=>(
                        <img key={index} onClick={()=>setMainImage(image.url)} src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ?"border-black":"border-gray-300"}`} />
                    ))}
                </div>
                {/* Main Image */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img src={mainImage} alt="Main Products" className='w-full h-auto object-cover rounded-lg' />
                    </div>
                </div>
                {/* MobileThumbnails */}
                <div className='md:hidden flex overscroll-x-auto space-x-4 mb-4'>
                    {products.images.map((image,index)=>(
                        <img  key={index} onClick={()=>setMainImage(image.url)} src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ?"border-black":"border-gray-300"}`} />
                    ))}
                </div>
                {/* Right Side */}
                <div className='md:w-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{products.name}</h1>
                    <p className='text-gray-600 mb-1 line-through text-lg'>{products.originalPrice && `${products.originalPrice}`}</p>
                    <p className='text-xl text-gray-500 mb-2'>${products.price}</p>
                    <p className=' text-gray-600 mb-4'>${products.description}</p>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Color:</p>
                        <div className='flex gap-2'>
                            {products.color.map((color)=>(
                                <button key={color} onClick={()=>setSelectColor(color)} className={`w-8 h-8 rounded-full border ${selectColor === color ? "border-4 border-black":"border-gray-300"}`} style={{backgroundColor:color.toLocaleLowerCase(),filter:"brightness(0.5)"}}></button>
                            ))}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Size:</p>
                        <div className='flex gap-2 mt-2'>
                            {products.size.map((size)=>(
                               <button key={size} onClick={()=>setSelectSize(size)} className={`px-4 py-2 rounded border ${selectSize === size ?"text-white bg-black":""}`}>{size}</button> 
                            ))}
                        </div>
                    </div>
                    <div className='mb-6'>
                        <p className='text-gray-700'>Quantity:</p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <button onClick={()=>handleQuantityChange("minus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                            <span className='text-lg'>{quantity}</span>
                            <button onClick={()=>handleQuantityChange("plus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                        </div>
                    </div>
                    <button onClick={handleAddToCart} disabled={buttonDisabled} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${buttonDisabled ? "cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}>
                        {buttonDisabled ? "Adding...":"Add To Cart"}
                    </button>
                    <div className='mt-10 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>Characterstics:</h3>
                        <table className='w-full text-left text-sm text-gray-600'>
                            <tbody>
                             <tr>
                                <td className='py-1'>Brand</td>
                                <td className='py-1'>{products.brand}</td>
                             </tr>
                             <tr>
                                <td className='py-1'>Material</td>
                                <td className='py-1'>{products.material}</td>
                             </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl text-center font-medium mb-4'>You May Also Like</h2>
                <ProductGrid products={similiarProducts}/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail