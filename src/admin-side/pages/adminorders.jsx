import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { fetchorders } from "../../redux/adminorders"
function Adminorders(){
    const[selectedorder,setselectedorder]=useState(null)
    const[search,setsearch]=useState("")
    const dispatch=useDispatch()
    const orders=useSelector((state)=>state.adminorders.orders)
    const filteredorders=orders.filter((order)=>order.id.toLowerCase().includes(search.toLowerCase())||order.items.some((item)=>item.name.toLowerCase().includes(search.toLowerCase())))
    useEffect(()=>{
        dispatch(fetchorders())
    },[dispatch])
    return (
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Orders</h1>
            <input type="text" placeholder="Search Orders...." value={search} onChange={(e)=>setsearch(e.target.value)} className="mb-6 w-full rounded-lg border p-3"/>
            <div className="space-y-4">
                {filteredorders.map((order)=>(
                    <div key={order.id} className="rounded-xl bg-white p-5 shadow">
                        <h2 className="font-semibold">Order {order.id}</h2>
                        {order.items.map((item)=>(
                            <div className="mb-3" key={item.productId}>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-500">Quantity:{item.quantity}</p>
                                <p className="text-gray-500">Price:{item.price}</p>
                            </div>
                        ))}
                        <p className="mt-2">Total {order.total}</p>
                        <p className="mt-1 text-gray-500">Status:{order.status}</p>
                        <button onClick={()=>setselectedorder(order)} className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Adminorders;