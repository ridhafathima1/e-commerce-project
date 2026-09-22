import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { togglewishlist } from "../redux/wishlist";
import { Heart } from "lucide-react";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="min-h-screen bg-pink-50">

      <nav className="flex items-center justify-between bg-white px-6 py-5 shadow-sm md:px-10">

        <Link to="/home">
          <h1 className="text-3xl font-bold text-pink-600">
            GLORA
          </h1>

          <p className="text-xs tracking-widest text-gray-500">
            RIFAYA BEAUTY
          </p>
        </Link>

        <div className="flex gap-6">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>

          <Link
            to="/wishlist"
            className="font-semibold text-pink-600"
          >
            Wishlist
          </Link>

          <Link to="/cart">Bag</Link>
        </div>

      </nav>

      <main className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (

          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">

            <Heart
              size={50}
              className="mx-auto mb-4 text-gray-300"
            />

            <h2 className="text-xl font-semibold">
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Save your favourite beauty products here.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white"
            >
              Explore Products
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >

                <div className="relative bg-pink-50">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover"
                  />

                  <button
                    onClick={() => dispatch(togglewishlist(product))}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-600 shadow"
                  >
                    <Heart
                      size={22}
                      fill="currentColor"
                    />
                  </button>

                </div>

                <div className="p-5">

                  <p className="text-xs uppercase tracking-wider text-pink-500">
                    {product.category}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-xl font-bold">
                    ₹{product.price}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="mt-5 block w-full rounded-xl bg-pink-600 py-3 text-center font-semibold text-white"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default Wishlist;