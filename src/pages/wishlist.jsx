import { useSelector, useDispatch } from "react-redux";
import {togglewishlist,removeWishlistFromDB } from "../redux/wishlist";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { toast } from "react-toastify"
function Wishlist() {
  const wishlist = useSelector(
    (state) => state.wishlist.items
  );
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800">
          My Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white py-20 text-center">
            <p className="text-lg text-gray-500">
              Your wishlist is empty.
            </p>
            <Link
              to="/products"
              className="mt-5 inline-block rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-contain p-5"/>
                <div className="p-5">
                  <p className="text-xs text-pink-500">
                    {product.category}
                  </p>
                  <h2 className="mt-2 font-semibold">
                    {product.name}
                  </h2>
                  <p className="mt-2 font-bold">
                    ₹{product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="mt-4 block rounded-lg bg-pink-600 py-2 text-center text-white">
                    View Details
                  </Link>
                  <button
                    onClick={() =>{
                      dispatch(togglewishlist(product));
                      dispatch(removeWishlistFromDB(product.id))
                      toast.success("Removed from wishlist!")
                    }}
                    className="mt-2 w-full rounded-lg bg-red-100 py-2 text-red-600">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Wishlist;