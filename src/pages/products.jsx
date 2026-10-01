
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const[sort,setsort]=useState("");
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/products")
        .then((res) => res.data),
  });

  const categories = [
    "All",
    "Skincare",
    "Haircare",
    "Makeup",
    "Body Care",
    "Fragrance",
    "Beauty Tools",
    "Lip Care",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  })
.sort((a,b)=>{
  if(sort==="low"){
    return Number(a.price)-Number(b.price)
  }
  if(sort==="high"){
    return Number(b.price)-Number(a.price)
  }
  return 0;
})
  if (isLoading) {
    return (
      <div className="min-h-screen bg-pink-50">
        <Navbar />

        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-lg font-semibold text-pink-600">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-pink-50">
        <Navbar />

        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-lg font-semibold text-red-500">
            Failed to load products.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <section className="px-6 py-16 text-center">
        <p className="text-sm font-semibold tracking-[0.4em] text-pink-600">
          RIFAYA BEAUTY
        </p>

        <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
          Discover Your Beauty
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Explore our collection of skincare and beauty essentials
          created for your everyday routine.
        </p>
      </section>

      <section className="mx-4 rounded-3xl bg-white p-6 shadow-sm md:mx-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

          <div className="w-full lg:w-[380px]">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-700 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div className="flex flex-1 flex-wrap items-center gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  category === item
                    ? "bg-pink-600 text-white"
                    : "bg-pink-50 text-gray-700 hover:bg-pink-100"
                }`}
              >
                {item}
              </button>
             
            ))}
             <button onClick={()=>setsort("low")} className={`rounded-full px-5 py-3 text-sm font-medium ${sort==="low"?"bg-pink-600 text-white":"bg-pink-50 text-gray-700"}`}>price:low to high</button>
             <button onClick={()=>setsort("high")} className={`rounded-full px-5 py-3 text-sm font-medium ${sort==="high"?"bg-pink-600 text-white":"bg-pink-50 text-gray-700"}`}>price:high to low</button>
             <button onClick={()=>setsort("")}
             className="rounded-full bg-gray-100 px-5 py-3 text-sm font-medium">clear</button>
          </div>

        </div>
      </section>

      <div className="px-6 py-10">
        <p className="text-gray-600">
          {filteredProducts.length} products found
        </p>
      </div>

      <main className="px-4 pb-16 md:px-6">
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-white py-20 text-center">
            <p className="text-xl font-semibold text-gray-700">
              No products found
            </p>

            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-50">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-600">
                    {product.category}
                  </p>

                  <h2 className="mt-2 line-clamp-2 min-h-[56px] text-lg font-semibold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {product.stock > 0
                      ? `${product.stock} items available`
                      : "Out of stock"}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="mt-5 block w-full rounded-xl bg-pink-600 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}
      </main>

      <footer className="border-t bg-white px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-pink-600">
          GLOZA
        </h2>

        <p className="mt-2 text-sm tracking-widest text-gray-500">
          RIFAYA BEAUTY
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Your beauty, your glow.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          © 2026 GLOZA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Products;

