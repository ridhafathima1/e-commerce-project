import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.warning("Passwords do not match")
      return;
    }
    try {
      await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      toast.success("Account created successfully!")
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    toast.error("Registration failed!")
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-pink-600">
          GLOZA
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          RIFAYA Beauty
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-gray-800">
          Create Account
        </h2>
        <p className="mt-1 text-gray-500">
          Join GLORA today
        </p>
        <form
          onSubmit={handleRegister}
          className="mt-6">
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700">
            Register
          </button>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-pink-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;