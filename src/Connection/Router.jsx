import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

function Router()
{
    return(
        <>
        <Routes>
               <Route path="/" element={<Login/>}/>                
               <Route path="/home" element={<Home/>}/>                

        </Routes>  
        </>
    )
}
export default Router;