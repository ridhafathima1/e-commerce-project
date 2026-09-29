import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //HANDLELOGINBUTTON
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:3000/users"
      );
      const users = response.data;
      const user = users.find(
        (item) =>
          item.email === email &&
          item.password === password
      );
      if (user) {
        console.log("logged in user:",user);
        console.log("user id:",user.id);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );
        localStorage.setItem("userId",String(user.id));
        console.log("USER ID FROM USER:", user.id);
console.log("USER ID FROM LOCAL STORAGE:", localStorage.getItem("userId"));
console.log("ALL LOCAL STORAGE:", { ...localStorage });
        console.log("stored user id:",localStorage.getItem("userId"))
        toast.success("Login successful!")
        navigate("/home", { replace: true });
      } else {
        toast.error("Invalid email or password")
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-pink-600">
          GLOZA
        </h1>
        <p className="mt-2 text-center text-sm tracking-widest text-gray-500">
          RIFAYA BEAUTY
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Login to your account
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Welcome back! Please enter your details.
        </p>
        <form
          onSubmit={handleLogin}
          className="mt-6">
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">
            Login
          </button>
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-pink-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;