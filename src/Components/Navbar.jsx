import { Link } from 'react-router-dom';
import Logo from "../assets/NavLogo.png"; 

function Navbar({ toggleSidebar }) {
    return (
        <header className="bg-indigo-400 px-4 scroll-px-1.5  w-full h-[75px] text-white flex items-center justify-between">
            <div className="flex items-center">
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
             </div>
             <div>
             <img src={Logo} className="w-36 ml-4" alt="Logo" />
             </div>
        </header>
    );
}

export default Navbar;
