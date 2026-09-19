import {Link} from "react-router-dom"
function Login(){
    return (
        <div >
            <h1>
                 GLORA
            </h1>
            <h2>
                Login
            </h2>
            <form>
                <div>
                    <label>email</label>
                    <input type="email" 
                    placeholder="enter your email"/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="enter a password" />
                </div>
                <button type="submit">login</button>
                <p>Don't have an account?<Link to="/register">register</Link></p>
            </form>
        </div>
    )
}
export default Login
