import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/NavLogo.png";

function PageNavBar()
{
    const navigate = useNavigate();
    const handleBackClick = () => {
    navigate("/home");
  };

    return(
        <>
        <nav className="max-sm:w-full h-[60px] bg-indigo-500">
        <div className="max-sm:w-[97%] h-[100%] flex justify-between items-center">
          {/* Back Icon */}
          <button
            onClick={handleBackClick}
            className="flex items-center px-4 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <img src={NavLogo} alt="Profile" className="w-[100px]" />
        </div>
      </nav>
        </>
    )
}
export default PageNavBar