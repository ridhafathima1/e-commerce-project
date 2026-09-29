import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
function Adminlogin(){
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const navigate=useNavigate()
    const handlelogin=(e)=>{
        e.preventDefault();
        if(email==="admin@gmail.com"&&password==="admin123"){
            localStorage.setItem("adminloggedin","true")
            toast.success("admin login successfull")
            navigate("/admin/dashboard")
        }else {
            toast.error("invalid admin credentials")
        }
    }
    return (
        <div className="flex-min-h-screen items-center justify-center bg-pink-50">
            <div className="w-full max-w-md rounded2xl bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Admin Login
                </h1>
                <form onSubmit={handlelogin} className="space-y-5">
                    <input type="email" placeholder="Admin Email"value={email} onChange={(e)=>setemail(e.target.value)} className="w-full rounded-lg border p-3"/>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full rounded-lg border p-3"/>
                    <button type="submit" className="w-full rounded-lg bg-pink-600 p-3 font-semibold text-white">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Adminlogin;