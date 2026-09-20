import {useState} from "react"
import {Link} from "react-router-dom"
function Register(){
    const[name,setname]=useState("");
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const handleregister=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email)
        console.log(password)
    }
    return(
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
        <div  className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-pink-600">GLORA</h1>
        <p  className="mt-2 text-center text-sm text-gray-500">RIFAYA beauty</p>
        <h1 className="mt-8 text-2xl font-semibold text-gray-800">
            Create Account
        </h1>
          <p className="mt-1 text-gray-500">
          Join GLORA today
        </p>
        <form onSubmit={handleregister}>
            <div className="mb-4">
                <label className="mb-2 block font-medium text-gray-700">name</label>
                <input type="text" placeholder="enter your name" onChange={(e)=>setname(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
            </div>
            <div className="mb-4">
                <label className="mb-2 block font-medium text-gray-700">email</label>
                <input type="email" placeholder="enter your email" onChange={(e)=>setemail(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"/>
            </div>
            <div className="mb-6">
                <label className="mb-2 block font-medium text-gray-700">password</label>
                <input type="password" placeholder="create a password" onChange={(e)=>setpassword(e.target.value)}  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >Register</button>
            <p className="mt-6 text-center text-gray-600">already have an account?<Link to="/login" className="font-semibold text-pink-600 hover:underline" >login</Link></p>
        </form>
    </div>
    </div>
    )
}
export default Register;