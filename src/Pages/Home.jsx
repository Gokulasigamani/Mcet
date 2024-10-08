import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router-dom";
import BusBooking from "../Components/BusBooking"; 
import ComplaintsHome from "../Components/ComplaintsHome";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [activeComponent, setActiveComponent] = useState("welcome"); // State to manage the active component
  const location = useLocation();

  useEffect(() => {
    const rollNumberFromStorage = localStorage.getItem("rollNumber");
    setRollNumber(rollNumberFromStorage || "");
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (component) => {
    setActiveComponent(component); 
    setIsSidebarOpen(false);
  };

  return (
    <div className=" max-sm:w-full overflow-hidden m-auto transition-all  relative min-h-screen bg-indigo-100">
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onMenuClick={handleMenuClick} />

      <main className="p-8">
        {activeComponent === "welcome" && (
          <h1
            className={`text-3xl font-bold text-center transition-opacity duration-1000 ${
              rollNumber ? "opacity-100" : "opacity-0"
            }`}
          >
            Welcome {rollNumber}
          </h1>
        )}

        {activeComponent === "busBooking" && <BusBooking />} {/* Conditionally render BusBooking component */}
        {activeComponent === "hostelComplaints" && <ComplaintsHome/>}
      </main>
    </div>
  );
}

export default Home;
