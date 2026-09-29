import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {Package,Users,ShoppingCart,IndianRupee,} from "lucide-react"
function Dashboard(){
    const[products,setproducts]=useState([])
    const[users,setusers]=useState([])
    const[orders,setorders]=useState([])
    const[revenue,setrevenue]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then ((res)=>setproducts(res.data))
        axios.get("http://localhost:3000/users")
        .then((res)=>setusers(res.data))
        axios.get("http://localhost:3000/orders")
        .then((res)=>setorders(res.data))
        const total=res.data.reduce((sum,order)=>sum+Number(order.total||0),0)
        setrevenue(total);
    },[])
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow">
                    <Package className="mb-3"/>
                    <h2 className="text-gray-500">Total Products</h2>
                    <p className="text-3xl font-bold">{products.length}</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow">
                    <Users className="mb-3"/>
                    <h2 className="text-gray-500">Total Users</h2>
                    <p className="text-3xl font-bold">{users.length}</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow">
                    <ShoppingCart className="mb-3"/>
                    <h2 className="text-gray-500">Total Orders</h2>
                    <p className="text 3xl font-bold">{orders.length}</p>
                </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow">
                <IndianRupee className="mb-3"/>
                <h2 className="text-gray-500">totalRevenue</h2>
                <p className="text-3xl font-bold">{revenue}</p>
            </div>
            <div className="mt-8 rounded-xl bg-white p-6 shadow">
                <h2 className="mb-5 text-2xl font-bold">Recent Orders</h2>
                {orders.slice(-5).map((order)=>(
                    <div key={order.id}
                    className="flex justify-between border-b p-4">
                        <p>Order #{order.id}</p>
                        <p>{order.total}</p>
                        </div>
                ))}

            </div>
        </div>
        
    )
} export default Dashboard;