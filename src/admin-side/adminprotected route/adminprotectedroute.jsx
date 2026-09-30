import {Navigate} from "react-router-dom"
function Adminprotectedroute({children}){
    const isadminloggedin=localStorage.getItem("adminloggedin");
    if(!isadminloggedin){
        return <Navigate to="/admin/login" replace />
    }
    return children
}
export default Adminprotectedroute