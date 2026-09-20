import {Link} from "react-router-dom"
import {useState} from "react"
function Login(){
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const handlelogin=(e)=>{
        e.preventDefault();
        console.log("email:",email)
        console.log("password:",password)
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-center text-4xl font-bold text-pink-600">
                 GLORA
            </h1>
            <p  className="mt-2 text-center text-sm text-gray-500">RIFAYA Beauty</p>
            <h2 className="mt-1 text-gray-500">
                Login into your account
            </h2>
            <form onSubmit={handlelogin}>
                <div className="mb-4">
                    <label className="mb-2 block font-medium text-gray-700">email</label>
                    <input type="email" 
                    placeholder="enter your email" onChange={(e)=>setemail(e.target.value)}className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
                </div>
                <div className="mb-6">
                    <label className="mb-2 block font-medium text-gray-700">password</label>
                    <input type="password" placeholder="enter a password" onChange={(e)=>setpassword(e.target.value)}                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
                </div>
                <button             className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
type="submit">login</button>
                <p className="mt-6 text-center text-gray-600">Don't have an account?{" "}<Link to="/register" className="font-semibold text-pink-600 hover:underline">register</Link></p>
            </form>
        </div>
        </div>
    )
}
export default Login;
