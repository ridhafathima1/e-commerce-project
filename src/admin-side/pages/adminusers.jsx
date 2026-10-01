import {useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import {fetchusers,blockusers} from "../../redux/adminusers";
function Adminusers(){
    const handleblock=(id)=>{
        dispatch(blockusers(id))
    };
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.adminusers.users)
    useEffect(()=>{
        dispatch(fetchusers());
    },[dispatch])
    return(
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Users</h1>
            <div className="space-y-4">
                {users.map((user)=>(
                    <div key={user.id} className="flex items-center justify-between rounded-xl bg-white p-5 shadow">
                        <div>
                            <h2 className="font-semibold">{user.name}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                        <button onClick={()=>handleblock(user.id)}className="rounded-lg bg-red-500 px-4 py-2 text-white">Block</button>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default Adminusers