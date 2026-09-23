
import { useSelector, useDispatch } from "react-redux";
import {
  removefromcart,
  increasequantity,
  decreasequantity,
} from "../redux/cart";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartitems = useSelector(
    (state) => state.cart.items
  );

  const total = cartitems.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow">

        <Link
          to="/home"
          className="text-2xl font-bold text-pink-600"
        >
          GLORA
        </Link>

        <div className="flex gap-6">
          <Link to="/home">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link
            to="/cart"
            className="font-semibold text-pink-600"
          >
            Bag
          </Link>
        </div>

      </nav>

      {/* Cart */}
      <div className="mx-auto max-w-6xl px-6 py-10">

        <h1 className="mb-8 text-3xl font-bold">
          Shopping Bag
        </h1>

        {cartitems.length === 0 ? (

          <div className="rounded-lg bg-white p-10 text-center shadow">

            <h2 className="mb-4 text-xl font-semibold">
              Your bag is empty
            </h2>

            <Link
              to="/products"
              className="inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-3">

            {/* Cart Items */}
            <div className="md:col-span-2">

              {cartitems.map((item) => (

                <div
                  key={item.id}
                  className="mb-4 flex items-center gap-6 rounded-lg bg-white p-5 shadow"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-pink-600">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-3 flex w-fit items-center rounded-lg border">

                      <button
                        onClick={() =>
                          dispatch(
                            decreasequantity(item.id)
                          )
                        }
                        className="px-3 py-1 text-lg hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="px-4">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(
                            increasequantity(item.id)
                          )
                        }
                        className="px-3 py-1 text-lg hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Item Total */}
                  <div className="text-right">

                    <p className="font-semibold">
                      ₹
                      {item.price *
                        (item.quantity || 1)}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removefromcart(item.id)
                        )
                      }
                      className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Summary */}
            <div className="h-fit rounded-lg bg-white p-6 shadow">

              <h2 className="mb-5 text-xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartitems.length}</span>
              </div>

              <div className="my-4 border-t" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                className="mt-6 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;