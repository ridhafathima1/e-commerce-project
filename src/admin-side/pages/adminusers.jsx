import {useEffect,useState} from "react"
import { useSelector,useDispatch } from "react-redux"
import {fetchusers,blockusers,unblockuser} from "../../redux/adminusers";
function Adminusers(){
    const[search,setsearch]=useState("")
    
    const handleunblock=(id)=>{
        dispatch(unblockuser(id))
    }
    const handleblock=(id)=>{
        dispatch(blockusers(id))
    };
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.adminusers.users)
    const filteredusers=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase())||
    user.email.toLowerCase().includes(search.toLowerCase()))
    useEffect(()=>{
        dispatch(fetchusers());
    },[dispatch])
    return(
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Users</h1>
            <input type="text" placeholder="Search users..." value={search} onChange={(e)=>setsearch(e.target.value)} className="mb-6 w-full rounded-lg border p-3"/>
            <div className="space-y-4">
                {users.length===0?(
                    <p className="rounded-xl bg-white p-6 text-center text-gray-500">
                        No users found
                    </p>
                ):(
                filteredusers.map((user)=>(
                    <div key={user.id} className="flex items-center justify-between rounded-xl bg-white p-5 shadow">
                        <div>
                            <h2 className="font-semibold">{user.name}</h2>
                            <p className="text-gray-500">{user.email}</p>
                            <p className="mt-1 text-sm text-gray-400">
                                User ID:{user.id}</p>

                        </div>
                        {user.blocked?(
                            <button onClick={()=>handleunblock(user.id)} className="rounded-lg bg-green-500 px-4 py-2 text-white">Unblock</button>
                        ):(
                            <button onClick={()=>handleblock(user.id)}className="rounded-lg bg-red-500 px-4 py-2 text-white">Block</button>
                        )}
                        </div>
                ))
            )}
            </div>
        </div>
    )
}
export default Adminusers;