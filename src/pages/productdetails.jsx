import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import { toast } from "react-toastify";
import Navbar from "../components/navbar";
import {
  addtocart,
  addCartToDB,
} from "../redux/cart";
import {
  togglewishlist,
  addWishlistToDB,
  removeWishlistFromDB,
} from "../redux/wishlist";
function Productdetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => res.data),
  });
  const cartitems = useSelector(
    (state) => state.cart.items
  );
  const wishlist = useSelector(
    (state) => state.wishlist.items
  );
  const isInCart = cartitems.some(
    (item) =>
      String(item.id) === String(data?.id)
  );
  const isWishlisted = wishlist.some(
    (item) =>
      String(item.id) === String(data?.id)
  );
  const handleAddToBag = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.warning(
        "Please login or register to add products to your bag"
      );
      return;
    }
    if (!data) {
      return;
    }
    if (isInCart) {
      toast.info("Product is already in your bag");
      return;
    }
    if (data.stock === 0) {
      toast.error("This product is out of stock");
      return;
    }
    const product = {
      ...data,
      quantity: quantity,
    };
    dispatch(addtocart(product));
    dispatch(addCartToDB(product));
    toast.success("Product added to your bag!");
  };
const handleWishlist = async () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    toast.warning("Please login or register to use wishlist");
    return;
  }

  if (!data) {
    return;
  }

  try {
    if (isWishlisted) {
      await dispatch(removeWishlistFromDB(data.id)).unwrap();
      dispatch(togglewishlist(data));
      toast.info("Removed from wishlist!");
    } else {
      await dispatch(addWishlistToDB(data)).unwrap();
      dispatch(togglewishlist(data));
      toast.success("Added to wishlist!");
    }
  } catch (error) {
    console.error("Wishlist error:", error);
    toast.error("Failed to update wishlist");
  }
};
  const increaseQuantity = () => {
    if (data?.stock && quantity < data.stock) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading product...
        </p>
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Product not found
          </h1>
          <Link
            to="/products"
            className="mt-4 inline-block rounded-lg bg-pink-600 px-5 py-3 text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 text-sm text-gray-500">
          <Link
            to="/home"
            className="hover:text-pink-600">
            Home
          </Link>
          <span className="mx-2">
            /
          </span>
          <Link
            to="/products"
            className="hover:text-pink-600">
            Products
          </Link>
          <span className="mx-2">
            /
          </span>
          <span className="text-gray-800">
            {data.name}
          </span>
        </div>
        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-8">
            <img
              src={data.image}
              alt={data.name}
              className="max-h-[500px] w-full object-contain"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-pink-600">
              {data.category}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {data.name}
            </h1>
            <p className="mt-5 leading-7 text-gray-600">
              {data.description}
            </p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-pink-600">
                ₹{data.price}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              {data.stock > 0
                ? `${data.stock} items available`
                : "Out of stock"}
            </p>
            <div className="mt-6">
              <p className="mb-2 font-medium">
                Quantity
              </p>
              <div className="flex w-fit items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="p-3 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40">
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="p-3 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40">
                  <Plus size={18} />
                </button>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleWishlist}
                className={`flex items-center justify-center rounded-lg border px-5 py-3 transition ${
                  isWishlisted
                    ? "border-pink-600 bg-pink-50 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:border-pink-600 hover:text-pink-600"}`}>
                <Heart
                  size={22}
                  fill={
                    isWishlisted
                      ? "currentColor"
                      : "none"}/>
              </button>
              <button
                type="button"
                onClick={handleAddToBag}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition ${
                  isInCart
                    ? "cursor-not-allowed bg-green-500"
                    : data.stock === 0
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-pink-600 hover:bg-pink-700"
                }`}>
                <ShoppingBag size={20} />
                {isInCart
                  ? "Added to Bag ✓"
                  : data.stock === 0
                  ? "Out of Stock"
                  : "Add to Bag"}
              </button>
            </div>
            {isInCart && (
              <Link
                to="/cart"
                className="mt-4 block rounded-lg border border-pink-600 py-3 text-center font-semibold text-pink-600 hover:bg-pink-50">
                View Bag
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Productdetails;