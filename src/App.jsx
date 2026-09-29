import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/approutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/cart";
import { fetchWishlist } from "./redux/wishlist"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  const dispatch = useDispatch();

 useEffect(() => {
  const userId=localStorage.getItem("userId")
  if(userId){
   dispatch(fetchCart());
   dispatch(fetchWishlist());
}
}, [dispatch]);

  


  return (
<>
    <BrowserRouter>
      <AppRoutes />
        </BrowserRouter>
    <ToastContainer position="top-right" autoClose={2000}/>
</>
      


  );

}

export default App;