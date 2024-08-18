import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import BookingPage from "../Pages/BookingPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/booking" element={<BookingPage/>} />
        

      </Routes>
    </>
  );
}

export default Router;
