import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import Register from "./pages/register"
function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<products/>}/>
      </Routes></BrowserRouter>
  )
}
export default App
