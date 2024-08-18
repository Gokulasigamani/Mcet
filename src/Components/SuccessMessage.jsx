import PageNavBar from "./PageNavBar";


function SuccessMessage() {
  return (
   <>
    <PageNavBar/>
    <div className="flex justify-center items-center h-screen bg-indigo-50 max-sm:h-[90vh] max-sm:p-4">
      <div className="text-center -mt-4 p-6 bg-white rounded-lg shadow-lg max-sm:w-full max-sm:px-4 max-sm:py-6">
        <h2 className="text-xl font-bold text-indigo-600 max-sm:text-lg">
          Thank You for Your Submission!
        </h2>
        <p className="text-gray-600 mt-4 max-sm:text-sm">
          Your concern has been received. We appreciate your feedback and will
          look into it promptly.
        </p>
        <p className="mt-4 text-gray-700 font-semibold max-sm:text-base">
          "We strive to make your stay better every day."
        </p>
        <p className="text-gray-500 mt-2 max-sm:text-sm">
          Together, we improve!
        </p>
        <p className="mt-8 text-indigo-500 max-sm:text-base font-bold">
          - Mcet Hostel Management
        </p>
      </div>
    </div>
   </>
  );
}

export default SuccessMessage;
