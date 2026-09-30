import {Link } from "react-router-dom"
import {LayoutDashboard,Package,Users,ShoppingCart} from "lucide-react";
function Adminsidebar(){
    return (
        <div className="min-h-screen w-64 bg-gray-900 p-5 text-white">
            <h1 className="mb-8 text-2xl font-bold">Admin Panel</h1>
            <div className="space-y-3">
                <Link to="/admin/dashboard" className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-700">
                <LayoutDashboard size={20}/>Products</Link>
                <Link to="/admin/users" className="flex item-center gap-3 rounded-lg p-3 hover:bg-gray-700">
                <Users size={20}/>Users</Link>
                <Link to="/admin/orders" className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-700">
                <ShoppingCart size={20}/>Orders</Link>
            </div>
        </div>
    )
}
export default Adminsidebar