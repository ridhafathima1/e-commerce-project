import {useSelector,useDispatch} from "react-redux"
import { removefromcart } from "../redux/cart"
import{Link} from "react-router-dom"
function Cart(){
    const dispatch=useDispatch();
    const cartitems=useSelector((state)=>state.cart.items)
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="flex items-center justify-between bg-white px-10 py-5 shadow">
                <Link to="/home" className="text-2xl font-bold text-pink-600">Glora</Link>
                <div className="flex gap-6">
                    <Link to="/home">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart" className="font-semibold text-pink-600">Cart</Link>
                </div>
            </nav>
            <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

        {cartitems.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Your cart is empty
            </h2>

            <Link
              to="/products"
              className="inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            {cartitems.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center gap-6 rounded-lg bg-white p-5 shadow"
              >
                <img
                  src={item.thumbnail || item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-pink-600">₹{item.price}</p>
                </div>

                <p>Quantity: 1</p>
                <button onClick={()=>dispatch(removefromcart(item.id))} className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
        </div>
    )
}


export default Cart