import {Routes,Route,Navigate,} from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Products from "../pages/products";
import Productdetails from "../pages/productdetails";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Orders from "../pages/orders";
import Wishlist from "../pages/wishlist";
import ProtectedRoute from "./protectedroute";
import Adminlogin from "../admin-side/pages/adminlogin";
import Dashboard from "../admin-side/pages/dashboard"
import Adminproducts from "../admin-side/pages/adminproducts"
import Adminlayout from "../admin-side/components/adminlayout";
import Adminprotectedroute from "../admin-side/adminprotected route/adminprotectedroute";
import Adminusers from "../admin-side/pages/adminusers";
import Adminorders from "../admin-side/pages/adminorders";
function AppRoutes() {
  return (
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace />}/>
        <Route
          path="/login"
          element={<Login />}/>
        <Route
          path="/register"
          element={<Register />}/>

           <Route path="/admin/login"
            element={<Adminlogin/>}/>
<Route path="/admin/dashboard" element={
  <Adminprotectedroute><Adminlayout><Dashboard/></Adminlayout></Adminprotectedroute>}/>

<Route path="/admin/products" element={<Adminprotectedroute><Adminlayout><Adminproducts/></Adminlayout></Adminprotectedroute>}/>
<Route path="/admin/users" element={
  <Adminprotectedroute>
    <Adminlayout>
      <Adminusers/>
    </Adminlayout>
  </Adminprotectedroute>
}/>
<Route path="/admin/orders" element={<Adminprotectedroute><Adminlayout>
  <Adminorders/>
  </Adminlayout></Adminprotectedroute>}/>
        <Route
          path="/home"
          element={<Home />}/>
        <Route
          path="/products"
          element={
              <Products />}/>
        <Route
          path="/products/:id"
          element={
              <Productdetails />}/>
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>}/>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>}/>
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>}/>
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>}/>
           
      </Routes>
  );
}
export default AppRoutes;