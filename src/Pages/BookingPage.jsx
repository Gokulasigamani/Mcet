import { useState } from "react";

function BookingPage() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [ticketDate, setTicketDate] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [stage, setStage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, rollNumber, ticketDate, timeOfDay, stage });
  };

  return (
    <div className="sm:hidden flex justify-center items-center h-[100vh] bg-gray-100"> {/* Hidden for larger screens */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm"> {/* max-w-sm ensures it’s mobile-optimized */}
        <h2 className="text-xl font-bold text-center text-indigo-600 mb-5">
          Book Your Ticket
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
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

          {/* Roll Number */}
          <div className="mb-4">
            <label htmlFor="rollNumber" className="block text-gray-700 font-medium">
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

          {/* Ticket Date */}
          <div className="mb-4">
            <label htmlFor="ticketDate" className="block text-gray-700 font-medium">
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
            <label htmlFor="timeOfDay" className="block text-gray-700 font-medium">
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
            <label htmlFor="stage" className="block text-gray-700 font-medium">
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
              <option value="Stage 1">Stage 1</option>
              <option value="Stage 2">Stage 2</option>
              <option value="Stage 3">Stage 3</option>
              <option value="Stage 4">Stage 4</option>
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
  );
}

export default BookingPage;
