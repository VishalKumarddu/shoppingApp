
import Home from './pages/Home'
import CartItem from './components/CartItem'
import {Route} from 'react-router-dom'
import Cart from './pages/Cart'
import { Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import FooterPage from './components/Footer/FooterPage'
import './App.css'


function App() {
return (
    <div >
      <div>
    
        <NavBar></NavBar>
      </div>
      <CartItem></CartItem>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
      </Routes>
     
     
    <div>
      <FooterPage></FooterPage>

    </div>
    </div>
  )
}

export default App
