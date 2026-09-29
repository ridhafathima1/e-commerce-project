import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {Package,Users,ShoppingCart,IndianRupee,} from "lucide-react"
function Dashboard(){
    const[products,setproducts]=useState([])
    const[users,setusers]=useState([])
    const[orders,setorders]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then ((res)=>setproducts(res.data))
        axios.get("http://localhost:3000/users")
        .then((res)=>setusers(res.data))
        axios.get("http://localhost:3000/orders")
        .then((res)=>setorders(res.data))
    },[])
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="flex gap-5">
                <div>
                    <h2>Total Products</h2>
                    <p>{products.length}</p>
                </div>
                <div>
                    <h2>Total Users</h2>
                    <p>{users.length}</p>
                </div>
                <div>
                    <h2>Total Orders</h2>
                    <p>{orders.length}</p>
                </div>
            </div>
        </div>
    )
} export default Dashboard;