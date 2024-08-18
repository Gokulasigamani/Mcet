import { useState } from "react";
import PageNavBar from "../Components/PageNavBar";
import axios from "axios";
import { FaFileAlt, FaFileImage, FaTimes } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import SuccessMessage from "../Components/SuccessMessage"; // Import the SuccessMessage component

function Complaints() {
  const [formData, setFormData] = useState({
    complaint: "",
    attachment: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const removeFile = () => {
    setFormData({ ...formData, attachment: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("complaint", formData.complaint);
    data.append("attachment", formData.attachment);

    axios
      .post("https://mcet-backend.onrender.com/complaints", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        console.log("Success:", response.data);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
      });
  };

  if (isSubmitted) {
    return <SuccessMessage />; // Render success message
  }

  return (
    <>
      <PageNavBar />
      <div className="flex justify-center items-center mt-8 p-4 max-sm:flex-col max-sm:px-4">
        <h2 className="text-xl font-bold mb-4 text-center max-sm:text-lg">
          Submit Your Hostel Concern
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-indigo-50 shadow-md rounded px-4 py-16 mb-4 w-full max-w-lg max-sm:max-w-full max-sm:px-2 max-sm:py-4"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2 max-sm:text-base">
              Share Your Concern
            </label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleInputChange}
              placeholder="Describe your issue in detail..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-sm:py-1 max-sm:px-2"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="mb-6 max-sm:mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2 max-sm:text-base">
              Attach Photos, Videos, or Documents (Optional)
            </label>

            {formData.attachment ? (
              <div className="relative flex items-center justify-between bg-white p-3 border border-gray-300 rounded-lg max-sm:flex-col">
                <div className="flex items-center">
                  {formData.attachment.type.startsWith("image/") ? (
                    <FaFileImage className="text-gray-600 mr-2" />
                  ) : (
                    <FaFileAlt className="text-gray-600 mr-2" />
                  )}
                  <span className="text-gray-700 max-sm:text-sm">
                    {formData.attachment.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <div className="bg-white border border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer max-sm:px-2 max-sm:py-3">
                <label
                  htmlFor="fileInput"
                  className="block text-gray-800 max-sm:text-sm"
                >
                  Tap to upload a file
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="attachment"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,video/*,.pdf,.doc,.docx"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-center max-sm:justify-start">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline max-sm:w-full max-sm:py-2 max-sm:text-lg"
              disabled={isSubmitting} // Disable button during submission
            >
              Submit Complaint
            </button>
          </div>

         
        </form>
      </div>
       {/* Loader */}
       {isSubmitting && (
            <div className="flex justify-center mt-2">
              <FiLoader className="animate-spin text-indigo-600 text-4xl" />
            </div>
          )}
    </>
  );
}

export default Complaints;
