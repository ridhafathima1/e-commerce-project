import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import { clearcart } from "../redux/cart";
import { toast } from "react-toastify"
function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),0);
  const handlePlaceOrder = async () => {
    try {
      const order = {
        items: cart,
        total: total,
        status: "Placed",
        date: new Date().toISOString(),
      };
      await axios.post(
        "http://localhost:3000/orders",
        order
      );
      toast.success("Order placed successfuly!")
      dispatch(clearcart());
      navigate("/orders");
    } catch (error) {
      console.log(error);
      toast.error("Failed to place order")
    }
  };
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          Checkout
        </h1>
        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center">
            <p>Your bag is empty.</p>
            <Link
              to="/products"
              className="mt-5 inline-block rounded-lg bg-pink-600 px-6 py-3 text-white">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>
            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-contain"/>
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ₹{item.price * (item.quantity || 1)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full rounded-xl bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Checkout;