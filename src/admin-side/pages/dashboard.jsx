import {useEffect} from "react"
import {Package,Users,ShoppingCart,IndianRupee,} from "lucide-react"
import {useDispatch,useSelector} from "react-redux"
import { fetchproducts } from "../../redux/adminproducts" 
import { fetchusers } from "../../redux/adminusers"
import { fetchorders } from "../../redux/adminorders"
function Dashboard(){
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.adminproducts.products)
   const users=useSelector((state)=>state.adminusers.users)
   const orders=useSelector((state)=>state.adminorders.orders)
   const revenue=orders.reduce((sum,order)=>sum+Number(order.total||0),0)
    useEffect(()=>{
      dispatch(fetchproducts())
       dispatch(fetchusers())
        dispatch(fetchorders())
    },[dispatch])
    return (
        <div>
            <div className="flex">
              
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1></div>
            </div>
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