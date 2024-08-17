import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router-dom";
import BusBooking from "../Components/BusBooking"; // Import your BusBooking component

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
    setActiveComponent(component); // Update the active component
    setIsSidebarOpen(false); // Close the sidebar when an item is clicked
  };

  return (
    <div className=" max-sm:w-full m-auto  relative min-h-screen bg-indigo-100">
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
      </main>
    </div>
  );
}

export default Home;
