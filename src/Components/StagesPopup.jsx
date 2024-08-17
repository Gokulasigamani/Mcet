const StagesPopup = ({ isOpen, onClose, stages }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          &times;
        </button>
    
        <h1 className="font-bold text-2xl text-orange-400 mb-4 text-center">Bus Stages</h1>
        
        {/* Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-orange-100">
              <th className="px-4 py-2 text-left text-orange-500 font-semibold">S.No</th>
              <th className="px-4 py-2 text-left text-orange-500 font-semibold">Stage</th>
            </tr>
          </thead>
          <tbody>
            {stages.map((stage) => (
              <tr key={stage.no} className="hover:bg-orange-50 transition-all duration-300">
                <td className="border px-4 py-2">{stage.no}</td>
                <td className="border px-4 py-2">{stage.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StagesPopup;
