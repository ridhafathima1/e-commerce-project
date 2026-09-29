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
        </div>
    )
}