import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageNavBar from "../Components/PageNavBar";

function BookingPage() {
  const location = useLocation();
  const { busNo, busRegNo, route, stages = [] } = location.state || {}; // Extract the data from state

  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [ticketDate, setTicketDate] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [stage, setStage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      rollNumber,
      ticketDate,
      timeOfDay,
      stage,
      busNo,
      route,
    });
  };

  

  return (
    <>
       <PageNavBar/>
      <div className="sm:hidden max-sm:w-full flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
          <button className="text-xl px-4 py-2 m-auto bg-indigo-500 flex  text-white rounded-lg font-bold text-center mb-5">
            Book Your Ticket
          </button>
          <form onSubmit={handleSubmit}>
            {/* Display Bus Info */}
            <div className="mb-4 text-center">
              <p className="text-gray-700 font-bold">Bus No: {busNo}</p>
              <p className="text-gray-700 font-medium">{route}</p>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-2 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 text-sm"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Roll Number Input */}
            <div className="mb-4">
              <label
                htmlFor="rollNumber"
                className="block text-gray-700 font-medium"
              >
                Roll Number
              </label>
              <input
                type="text"
                id="rollNumber"
                required
                className="mt-2 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 text-sm"
                placeholder="Enter Your Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>

            {/* Date of Ticket */}
            <div className="mb-4">
              <label
                htmlFor="ticketDate"
                className="block text-gray-700 font-medium"
              >
                Date of Ticket
              </label>
              <input
                type="date"
                id="ticketDate"
                required
                className="mt-2 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 text-sm"
                value={ticketDate}
                onChange={(e) => setTicketDate(e.target.value)}
              />
            </div>

            {/* Time of Day */}
            <div className="mb-4">
              <label
                htmlFor="timeOfDay"
                className="block text-gray-700 font-medium"
              >
                Time of Day
              </label>
              <select
                id="timeOfDay"
                required
                className="mt-2 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 bg-white text-sm"
                value={timeOfDay}
                onChange={(e) => setTimeOfDay(e.target.value)}
              >
                <option value="">Select Time</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Stage Selection */}
            <div className="mb-6">
              <label
                htmlFor="stage"
                className="block text-gray-700 font-medium"
              >
                Stage for Drop-off
              </label>
              <select
                id="stage"
                required
                className="mt-2 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 bg-white text-sm"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
              >
                <option value="">Select Stage</option>
                {stages.map((stage) => (
                  <option key={stage.no} value={stage.name}>
                    {stage.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium transition-all hover:bg-indigo-700"
            >
              Book Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
