import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Productdetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/ridhafathima1/e-commerce-project/main/db.json"
        )
        .then((res) => {
          const product = res.data.products.find(
            (item) => item.id === Number(id)
          );

          return product;
        }),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-pink-600">Loading product...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-xl text-red-500">Product not found</p>

        <Link
          to="/products"
          className="mt-4 rounded-lg bg-pink-600 px-6 py-3 text-white"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link to="/home">
            <h1 className="text-3xl font-bold text-pink-600">
              GLORA
            </h1>

            <p className="text-xs text-gray-500">
              RIFAYA Beauty
            </p>
          </Link>

          <div className="flex items-center gap-6 text-gray-700">
            <Link to="/home" className="hover:text-pink-600">
              Home
            </Link>

            <Link to="/products" className="hover:text-pink-600">
              Products
            </Link>

            <span className="cursor-pointer hover:text-pink-600">
              ♡ Wishlist
            </span>

            <span className="cursor-pointer hover:text-pink-600">
              🛍 Bag
            </span>
          </div>

        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-8 text-sm text-gray-500">
          <Link to="/home" className="hover:text-pink-600">
            Home
          </Link>
          {" / "}
          <Link to="/products" className="hover:text-pink-600">
            Products
          </Link>
          {" / "}
          <span>{data.name}</span>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl bg-pink-50 p-8">

            <div className="relative flex min-h-[500px] items-center justify-center">

              <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                Best Seller
              </span>

              <button className="absolute right-4 top-4 text-3xl text-gray-500 hover:text-pink-600">
                ♡
              </button>

              <img
                src={data.image}
                alt={data.name}
                className="max-h-[450px] max-w-full object-contain"
              />

            </div>
          </div>

        
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-pink-600">
              {data.category}
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              {data.name}
            </h2>

            
            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-500">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                4.8 (120 reviews)
              </span>
            </div>

            
            <div className="mt-6 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{data.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{Math.round(data.price * 1.2)}
              </span>

              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">
                20% OFF
              </span>
            </div>

        
            <p className="mt-6 leading-7 text-gray-600">
              {data.description}
            </p>

        
            <div className="mt-6 border-y py-5">
              <h3 className="mb-3 font-semibold text-gray-900">
                Why you'll love it
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Gentle and skin-friendly</li>
                <li>✓ Suitable for everyday use</li>
                <li>✓ Beautiful RIFAYA formulation</li>
                <li>✓ Cruelty-free beauty</li>
              </ul>
            </div>

            
            <div className="mt-6">
              <p className="mb-2 font-semibold text-gray-800">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-lg border">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  −
                </button>

                <span className="px-5">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>

              </div>
            </div>

            
            <button
              className="mt-8 w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
            >
              Add to Bag
            </button>

    
            <Link
              to="/products"
              className="mt-4 text-center text-sm text-gray-500 hover:text-pink-600"
            >
              ← Continue Shopping
            </Link>

          </div>
        </div>
      </main>

      
      <footer className="mt-12 border-t bg-gray-50 px-6 py-8 text-center">
        <h2 className="text-2xl font-bold text-pink-600">
          GLORA
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          RIFAYA Beauty — Your beauty, your glow.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          © 2026 GLORA. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Productdetails;