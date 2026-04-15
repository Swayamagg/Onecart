import Navbar from '../layouts/Navbar'
import TopBar from '../layouts/TopBar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        <TopBar/>
        <Navbar/>
    </header>
  )
}

export default Header