import {useEffect,useState} from "react"
import axios from "axios"
function Adminproducts(){
    const[products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((res)=>{
            setproducts(res.data)
        })
    },[]);
    return (
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-bold">Products</h1>
            <button className="mb-6 rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white">Add Product</button>
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