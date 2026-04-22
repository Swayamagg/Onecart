import Hero from "../components/layouts/Hero"
import Features from "../components/products/Features"
import FeatureSection from "../components/products/FeatureSection"
import GenderCollection from "../components/products/GenderCollection"
import NewArrival from "../components/products/NewArrival"
import ProductDetail from "../components/products/ProductDetail"
import ProductGrid from "../components/products/ProductGrid"

const Home = () => {
  const placeholderProducts=[
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
  return (
    <div>
      <Hero/>
      <GenderCollection/>
      <NewArrival/>

      {/* BestSeller */}
      <h2 className="text-3xl font-bold mb-4 text-center">Best Seller</h2>
      <ProductDetail/>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Top Wears For Women</h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeatureSection/>
      <Features/>
    </div>
  )
}

export default Home