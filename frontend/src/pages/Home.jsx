import Hero from "../components/layouts/Hero"
import GenderCollection from "../components/products/GenderCollection"
import NewArrival from "../components/products/NewArrival"
import ProductDetail from "../components/products/ProductDetail"

const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderCollection/>
      <NewArrival/>

      {/* BestSeller */}
      <h2 className="text-3xl font-bold mb-4 text-center">Best Seller</h2>
      <ProductDetail/>
    </div>
  )
}

export default Home