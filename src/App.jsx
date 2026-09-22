import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Register from "./pages/register"
import Products from "./pages/products"
import Productdetails from "./pages/productdetails"
import Cart from "./pages/cart"
function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Productdetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes></BrowserRouter>
  )
}
export default App
