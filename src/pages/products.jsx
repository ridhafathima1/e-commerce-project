import {useQuery} from "@tanstack/react-query"
import axios from "axios"
function Products(){
    const{data,isLoading,isError}=useQuery({
        queryKey:["products"],
        queryFn:()=>axios.get("http://localhost:3000/product")
        .then((res)=>res.data)
    })
    if(isLoading){
        return <h2>
            Loading...
        </h2>
    }
    if(isError){
        return <h2>Something went wrong</h2>
    }
    return (
        <div>
            <h1>Glowra products</h1>
            <div>
                            {data.products.map((product)=>(
                <div key={product.id}>
                    <img src={product.image} alt={product.name} width="200"></img>
                    <h2>{product.name}</h2>
                    <p>{product.gategory}</p>
                    <p>{product.description}</p>
                    <p>{product.description}</p>
                    <p>stock:{product.stock}</p>
                    <Link to={`/products/${product.id}`}>
                    <button>
                        view details</button></Link>
                </div>
            ))}
        </div>
        </div>
    )
}
export default Products;