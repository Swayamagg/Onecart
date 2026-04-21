import React from 'react'

const ProductDetail = () => {
    const products={
        name:"Stylish Jacket",
        price:120,
        originalPrice:150,
        description:"This is stylish jacket perfect for any occasion",
        brand:"FashionBrand",
        material:"Leather",
        size:["S","M","L","XL"],
        color:["Red","Black"],
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
    }
  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex md:flex-row flex-col'>
                {/* Left Thumbnails */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {products.images.map((image,index)=>(
                        <img key={index} src={image.url} alt={image.altText || `Thumbnail ${index}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer border' />
                    ))}
                </div>
                {/* Main Image */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img src={products.images[0]?.url} alt={products.images[0]?.altText} className='w-full h-auto object-cover rounded-lg' />
                    </div>
                </div>
                {/* MobileThumbnails */}
                <div className='md:hidden space-x-4 mb-4 flex overflow-x-scroll'>
                    {products.images.map((image,index)=>(
                        <img key={index} src={image.url} alt={image.altText || `Thumbnail ${index}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer border' />
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
                                <button key={color} className='w-8 h-8 rounded-full border' style={{backgroundColor:color.toLocaleLowerCase(),filter:"brightness(0.5)"}}></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail