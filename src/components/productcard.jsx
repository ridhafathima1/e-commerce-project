import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { togglewishlist } from "../redux/wishlist";
function Productcard({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative bg-pink-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-contain p-4"/>
        <button
          onClick={() => dispatch(togglewishlist(product))}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          <Heart
            size={22}
            className={
              isWishlisted
                ? "text-pink-600"
                : "text-gray-500"
            }
            fill={isWishlisted ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-pink-500">
          {product.category}
        </p>
        <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold">
          {product.name}
        </h3>
        <p className="mt-2 text-xl font-bold">
          ₹{product.price}
        </p>
        <Link
          to={`/products/${product.id}`}
          className="mt-4 block w-full rounded-xl bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Productcard;