import {useEffect,useState} from "react"
import axios from "axios"
function Adminproducts(){
    const[products,setproducts]=useState([])
    const[form,setform]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((res)=>{
            setproducts(res.data)
        })
    },[]);
    return (
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Products</h1>
            <button onClick={()=>setform(true)}className="mb-6 rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white">Add Product</button>
            {form&&(
                <div className="mb-6 rounded-xl bg-white p-6 shadow">
                    <h2 className="mb-4 text-xl font-bold">Add Product</h2>
                    <input type="text" placeholder="Product Name" className="mb-3 w-full rounded-lg border p-3"/>
                    <input type="number" placeholder="price" className="mb-3 w-full rounded-lg border p-3"/>
                    <input type="text" placeholder="category" className="mb-3 w-full rounded-lg border p-3"/>
                    <button className="rounded-lg bg-green-600 px-5 py-2 text-white">Save Product</button>
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
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default Adminproducts;