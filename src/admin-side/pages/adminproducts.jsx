import {useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { fetchproducts,addproduct,deleteproduct,updateproduct } from "../../redux/adminproducts"
function Adminproducts(){
    const[form,setform]=useState(false)
    const[name,setname]=useState("")
    const[price,setprice]=useState("")
    const[category,setcategory]=useState("")
    const [editid,seteditid]=useState(null)
    const[editname,seteditname]=useState("")
    const[editprice,seteditprice]=useState("")
    const[editcategory,seteditcategory]=useState("")
     const [currentpage,setcurrentpage]=useState(1)
    const productsperpage=5;
   const dispatch=useDispatch()
   const products=useSelector((state)=>state.adminproducts.products);
   useEffect(()=>{
    dispatch(fetchProducts());
   },[dispatch])
   const handleedit=(product)=>{
    seteditid(product.id);
    seteditname(product.name)
    seteditprice(product.price)
    seteditcategory(product.category)
   }
   const handleupdate=()=>{
    const updatedproduct={
        name:editname,
        price:Number(editprice),
        category:editcategory,
    }
    dispatch(updateproduct({id:editid,product:updatedproduct}));
    seteditid(null)
    seteditname("")
    seteditprice("")
    seteditcategory("")
   }
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
    const lastindex=currentpage*productsperpage;
    const firstindex=lastindex-productsperpage;
    const currentproducts=products.slice(firstindex,lastindex);
    const totalpages=Math.ceil(products.length/productsperpage)

   
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
            {editid&&(
                <div className="mb-6 rounded-xl bg-white p-6 shadow">
<h2 className="mb-4 text-xl font-bold">Edit Product</h2>
<input type="text" placeholder="Product Name" value={editname} onChange={(e)=>seteditname(e.target.value)} className="mb-3 w-full rounded-lg border p-3"/>
<input type="Number" placeholder="price" value={editprice} onChange={(e)=>seteditprice(e.target.value)} className="mb-3 w-full rounded-lg border p-3"/>
<input type="text" placeholder="Category" value={editcategory} onChange={(e)=>seteditcategory(e.target.value)} className="mb-3 w-full rounded-lg border p-3"/>
<button onClick={handleupdate} className="rounded-lg bg-blue-600 px-5 py-2 text-white">Update Product</button>
<button onClick={()=>seteditid(null)} className="ml-3 rounded-lg bg-gray-300 px-5 py-2">Cancel</button>
                </div>
            )}
            <div className="space-y-4">
                {currentproducts.map((product)=>(
                    <div key={product.id} className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
                        <div>
                            <h2 className="font-semibold">{product.name}</h2>
                            <p>{product.price}</p>
                            <p className="text-gray-500">{product.category}</p>
                            <button className="rounded-lg bg-red-500 px-4 py-2 text-white" onClick={()=>handledelete(product.id)}>Delete</button>
                            <button  onClick={()=>handleedit(product)}className="mr-2 rounded-lg bg-blue-500 px-4 py-2 text-white">Edit</button>
                            </div>
                        </div>
                ))}
                
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
                <button onClick={()=>setcurrentpage(currentpage-1)} disabled={currentpage===1} className="rounded-lg bg-gray-300 px-4 py-2 disabled:opacity-50">Previous</button>
                <span>Page{currentpage} of{totalpages}</span>
                <button onClick={()=>setcurrentpage(currentpage+1)} disabled={currentpage===totalpages}
                className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:opacity-50">Next</button>
            </div>
        </div>
    )
}          
export default Adminproducts;