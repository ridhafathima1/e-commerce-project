import {useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { fetchProducts,addproduct,deleteproduct } from "../../redux/adminproducts"
function Adminproducts(){
    const[form,setform]=useState(false)
    const[name,setname]=useState("")
    const[price,setprice]=useState("")
    const[category,setcategory]=useState("")
   const dispatch=useDispatch()
   const products=useSelector((state)=>state.adminproducts.products);
   useEffect(()=>{
    dispatch(fetchProducts());
   },[dispatch])
   const handledelete=(id)=>{
    dispatch(deleteproduct(id))
   }
    const handleaddproduct=()=>{
        const newproduct={
            name:name,
            price:Number(price),
            category:category,
        };
       dispatch(addproduct(newproduct))
       setname("")
       setprice("")
       setcategory("")
       setform(false)
    }
    return (
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Products</h1>
            <button onClick={()=>setform(true)}className="mb-6 rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white">Add Product</button>
            {form&&(
                <div className="mb-6 rounded-xl bg-white p-6 shadow">
                    <h2 className="mb-4 text-xl font-bold">Add Product</h2>
                    <input type="text" placeholder="Product Name" value={name} onChange={(e)=>setname(e.target.value)} className="mb-3 w-full rounded-lg border p-3"/>
                    <input type="number" placeholder="price" value={price} onChange={(e)=>setprice(e.target.value)}className="mb-3 w-full rounded-lg border p-3"/>
                    <input type="text" placeholder="category"  value={category} onChange={(e)=>setcategory(e.target.value)}className="mb-3 w-full rounded-lg border p-3"/>
                    <button onClick={handleaddproduct}className="rounded-lg bg-green-600 px-5 py-2 text-white">Save Product</button>
                    <button onClick={()=>setform(false)} className="ml-3 rounded-lg bg-gray-300 px-5 py-2">Cancel</button>
                    </div>
            )}
            <div className="space-y-4">
                {products.map((product)=>(
                    <div key={product.id} className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
                        <div>
                            <h2 className="font-semibold">{product.name}</h2>
                            <p>{product.price}</p>
                            <p className="text-gray-500">{product.category}</p>
                            <button className="rounded-lg bg-red-500 px-4 py-2 text-white" onClick={()=>handledelete(product.id)}>Delete</button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}          
export default Adminproducts;