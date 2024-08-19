import { useState } from "react";
import Logo from "../assets/Logo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [rollNumber, setRollNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const [inputError, setInputError] = useState(false); 
    const [loading, setLoading] = useState(false); 

    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('https://mcet-backend.onrender.com/login', { 
            rollnumber: rollNumber, 
            password
        })
        .then(result => {
            setLoading(false); 
            setErrorMessage(""); 
            setInputError(false); 

            // If admin, navigate to admin panel
            if (result.data.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/home');
            }
        })
        .catch(err => {
            console.log(err);
            setLoading(false); 
            setErrorMessage("Invalid roll number or password"); 
            setInputError(true); 
        });

        localStorage.setItem("rollNumber", rollNumber);
    };

    return (
      <>
        <div className="max-sm:w-[100vw] max-sm:h-[100vh] sm:hidden">
          <header>
            <img src={Logo} className="w-[80%] m-auto pt-28" alt="Logo" />
          </header>

          <div className="w-[350px] pb-7 pt-3 rounded-lg m-auto mt-5 border shadow-lg">
            <form onSubmit={SubmitHandler}>
              <div className="w-[320px] m-auto mt-5">
                <div>
                  <label htmlFor="RollNumber" className="font-medium text-lg">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full mt-2 py-3 px-2 border outline-orange-400 rounded-lg transition-all focus:shadow-xl ${
                      inputError ? "border-red-500" : ""
                    }`}
                    placeholder="Enter Your Roll Number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="Password" className="font-medium text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className={`w-full mt-2 py-3 px-2 border outline-orange-400 rounded-lg transition-all focus:shadow-xl ${
                      inputError ? "border-red-500" : ""
                    }`}
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="px-5 py-1 bg-orange-200 mt-4 text-orange-600 rounded-md text-lg font-medium transition-all hover:bg-orange-500 hover:text-orange-100 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>

          <section className="mt-7 text-center">
            <h1 className="text-lg font-medium leading-snug">
              Effortless Commute For <br />
              <span className="text-orange-600 text-xl font-bold">
                Hostel Students.
              </span>
            </h1>
          </section>
        </div>
      </>
    );
}

export default Login;
