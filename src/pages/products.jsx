import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/ridhafathima1/e-commerce-project/main/db.json"
        )
        .then((res) => res.data),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-pink-50">
        <p className="text-lg font-semibold text-pink-600">
          Loading RIFAYA products...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">Something went wrong.</p>
      </div>
    );
  }

  const products = data.products || [];

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-pink-50">

      
      <nav className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-10">

        <Link to="/home">
          <h1 className="text-3xl font-bold text-pink-600">
            GLORA
          </h1>

          <p className="text-xs tracking-widest text-gray-500">
            RIFAYA BEAUTY
          </p>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link
            to="/home"
            className="text-gray-700 hover:text-pink-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-semibold text-pink-600"
          >
            Products
          </Link>

          <Link
            to="/login"
            className="text-gray-700 hover:text-pink-600"
          >
            Login
          </Link>
        </div>

        <button className="rounded-full bg-pink-100 px-4 py-2 text-pink-600">
           Bag
        </button>
      </nav>

      
      <section className="px-6 py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
          RIFAYA Beauty
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-800">
          Discover Your Beauty
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-gray-500">
          Explore our collection of skincare and beauty essentials
          created for your everyday routine.
        </p>
      </section>

    
      <section className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500 md:w-80"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-pink-600 text-white"
                    : "bg-pink-50 text-gray-600 hover:bg-pink-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>

      
      <div className="mx-auto mt-10 max-w-7xl px-6">
        <p className="text-sm text-gray-500">
          Showing {filteredProducts.length} products
        </p>
      </div>

      
      <main className="mx-auto max-w-7xl px-6 py-6">

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-white py-20 text-center">
            <p className="text-lg text-gray-500">
              No products found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-pink-50">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md hover:bg-pink-100">
                    ♡
                  </button>

                </div>
                <div className="p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-pink-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">

                    <p className="text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </p>

                    <span className="text-sm text-yellow-500">
                      ★ 4.8
                    </span>

                  </div>

                  <Link to={`/products/${product.id}`}>
                    <button className="mt-5 w-full rounded-xl bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">
                      View Details
                    </button>
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white px-6 py-10 text-center">

        <h2 className="text-2xl font-bold text-pink-600">
          GLORA
        </h2>

        <p className="mt-1 text-sm tracking-widest text-gray-500">
          RIFAYA BEAUTY
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Beauty made simple, beautiful and yours.
        </p>

      </footer>

    </div>
  );
}

export default Products;