import {useEffect} from "react"
import {Package,Users,ShoppingCart,IndianRupee,} from "lucide-react"
import {useDispatch,useSelector} from "react-redux"
import { fetchproducts } from "../../redux/adminproducts" 
import { fetchusers } from "../../redux/adminusers"
import { fetchorders } from "../../redux/adminorders"
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts"
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
   const graphdata=Object.values(orders.reduce((acc,order)=>{
    const date=new Date(order.date).toLocaleDateString();
    if(!acc[date]){
        acc[date]={
            name:date,
            amount:0
        }
    }
    acc[date].amount+=Number(order.total||0);
    return acc;
   },{})).slice(-7)
    const recentcustomers=users.slice(-5).reverse();
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
                    <p className="text-3xl font-bold">{orders.length}</p>
                </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow">
                <IndianRupee className="mb-3"/>
                <h2 className="text-gray-500">totalRevenue</h2>
                <p className="text-3xl font-bold">{revenue}</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow lg:col-span-2">
                    <h2 className="mb-5 text-xl font-bold">Sales Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={graphdata}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="amount" stroke="#111827" strokeWidth={3}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow">
                <h2 className="mb-5 text-xl font-bold">
                    Recent Customers
                </h2>
                {recentcustomers.length===0?(
                    <p className="text-center text-gray-500">No customers found</p>
                ):(
                recentcustomers.map((user) => (
                    <div key={user.id} className="mb-4 border-b pb-3">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <span className="text-xs text-gray-400">#{user.id}</span>
                    </div>
                ))
                )}
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