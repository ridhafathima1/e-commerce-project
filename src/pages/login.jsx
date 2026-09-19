import {Link} from "react-router-dom"
import {useState} from "react"
function Login(){
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const handlelogin=(e)=>{
        e.preventDefault();
        console.log("email:",email)
        console.log("password:",password)
    }
    return (
        <div >
            <h1>
                 GLORA
            </h1>
            <h2>
                Login
            </h2>
            <form onSubmit={handlelogin}>
                <div>
                    <label>email</label>
                    <input type="email" 
                    placeholder="enter your email" onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="enter a password" onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <button type="submit">login</button>
                <p>Don't have an account?<Link to="/register">register</Link></p>
            </form>
        </div>
    )
}
export default Login
