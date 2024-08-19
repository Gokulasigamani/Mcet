import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import BookingPage from "../Pages/BookingPage";
import Complaints from "../Pages/Complaints";
import Admin from "../Pages/Admin";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />}/>
        <Route path="booking" element={<BookingPage/>} />
        <Route path="complaints" element={<Complaints/>} />
        <Route path="admin" element={<Admin/>} />
      
        

      </Routes>
    </>
  );
}

export default Router;
