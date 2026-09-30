import Adminsidebar from "./adminsidebar";
import Adminheader from "./adminheader";
function Adminlayout({children}){
    return (
        <div className="flex min-h screen bg-gray-100">
            <Adminsidebar/>
            <div className="flex-1">
                <Adminheader/>
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}
export default Adminlayout