import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  Package,
  X,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId=localStorage.getItem("userId")
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setShowAccount(false);
toast.success("Logged out successfully!")
    navigate("/login", { replace: true });
  };
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-10">  
      <Link to="/home">
        <h1 className="text-3xl font-bold text-pink-600">
          GLOZA
        </h1>
        <p className="text-xs tracking-widest text-gray-500">
          RIFAYA BEAUTY
        </p>
      </Link>
      <div className="hidden items-center gap-7 md:flex">
        <Link
          to="/home"
          className="text-gray-700 hover:text-pink-600">
          Home
        </Link>
        <Link
          to="/products"
          className="text-gray-700 hover:text-pink-600">
          Products
        </Link>
        <Link
          to="/wishlist"
          className="flex items-center gap-1 text-gray-700 hover:text-pink-600">
          <Heart size={18} />
          Wishlist ({wishlist.length})
        </Link>
        {user &&userId ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowAccount(!showAccount)}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
              <User size={20} />
              <span>{user.name}</span>
            </button>
            {showAccount && (
              <div className="absolute right-0 top-12 w-72 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-gray-100">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">
                    My Account
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowAccount(false)}
                    className="text-gray-400 hover:text-gray-700">
                    <X size={18} />
                  </button>
                </div>
                <div className="rounded-xl bg-pink-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 text-white">
                      <User size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Link
                    to="/orders"
                    onClick={() => setShowAccount(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    <Package size={19} />
                    My Orders
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-500 hover:bg-red-50">
                    <LogOut size={19} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/register"
            className="text-gray-700 hover:text-pink-600">
            Sign Up
          </Link>
        )}
      </div>
      <Link
        to="/cart"
        className="flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-pink-600">
        <ShoppingBag size={18} />
        Bag ({cart.length})
      </Link>
      <Link to="/admin/login">
      <button className="rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white">
        Admin Login</button>
        </Link>
    </nav>
  );
}
export default Navbar;