import {useState} from "react"
import {Link} from "react-router-dom"
function Register(){
    const[name,setname]=useState("");
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const handleregister=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log
    }
    return(
    <div>
        <h1>
            Create Account
        </h1>
        <form>
            <div>
                <label>name</label>
                <input type="text" placeholder="enter your name"/>
            </div>
            <div>
                <label>email</label>
                <input type="email" placeholder="enter your email"/>
            </div>
            <div>
                <label>password</label>
                <input type="password" placeholder="create a password"/>
            </div>
            <button type="submit">Register</button>
            <p>already have an account<Link to="/login">login</Link></p>
        </form>
    </div>
    )
}
export default Register