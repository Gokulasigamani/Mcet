import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router-dom";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [rollNumber, setRollNumber] = useState("");
    const location = useLocation();

    useEffect(() => {
        // Assuming the rollNumber is stored in localStorage after login
        const rollNumberFromStorage = localStorage.getItem("rollNumber");
        setRollNumber(rollNumberFromStorage || "");
    }, [location]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen bg-gray-100">
    
            <Navbar toggleSidebar={toggleSidebar} />


            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        
            <main className="p-8">
                <h1 className={`text-3xl font-bold text-center transition-opacity duration-1000 ${rollNumber ? "opacity-100" : "opacity-0"}`}>
                    Welcome {rollNumber}
                </h1>
            </main>
        </div>
    );
}

export default Home;
