import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-pink-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">
            GLORA
          </h1>
          <p className="text-sm text-gray-500">
            RIFAYA Beauty
          </p>
        </div>

        <div className="flex gap-6">
          <Link to="/home" className="text-gray-700 hover:text-pink-600">
            Home
          </Link>

          <Link to="/products" className="text-gray-700 hover:text-pink-600">
            Products
          </Link>

          <Link to="/login" className="text-gray-700 hover:text-pink-600">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
          RIFAYA Beauty
        </p>

        <h2 className="text-4xl font-bold text-gray-800 md:text-6xl">
          Your Beauty,
          <br />
          Your Glow
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
          Discover skincare and beauty products designed for your
          everyday routine.
        </p>

        <Link to="/products">
          <button className="mt-8 rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white hover:bg-pink-700">
            Shop RIFAYA
          </button>
        </Link>
      </section>

      {/* Categories */}
      <section className="px-8 pb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Explore Beauty
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Skincare</h3>
            <p className="mt-2 text-gray-500">
              Care for your everyday glow.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Serums</h3>
            <p className="mt-2 text-gray-500">
              Lightweight formulas for your routine.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Beauty</h3>
            <p className="mt-2 text-gray-500">
              Discover your RIFAYA favorites.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;