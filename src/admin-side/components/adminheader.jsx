import {LogOut} from "lucide-react"
import {useNavigate} from "react-router-dom"
function Adminheader(){
    const navigate=useNavigate();
      const handlelogout=()=>{
        localStorage.removeItem("adminloggedin");
        navigate("/admin/login")
      }
      return (
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <button onClick={handlelogout} className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white">
                <LogOut size={18}/>Logout
            </button>
        </header>
      )
}
export default Adminheader;