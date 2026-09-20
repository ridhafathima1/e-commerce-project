import{Link} from "react-router-dom"
function Home(){
    return (
        <div>
            <h1>Glowra</h1>
            <h1>welcome to Glora</h1>
            <p>discover beauty and cosmetic products</p>
            <Link to="/products">
            <button>shop now</button>
            </Link>
        </div>
    )
}
export default Home
