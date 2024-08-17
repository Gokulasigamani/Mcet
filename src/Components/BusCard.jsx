import { useState } from 'react';
import StagesPopup from './StagesPopup';

const BusCard = ({ busNo, busRegNo, route, stages }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

 return (
    <>
      <section>
        <div className="max-sm:w-full">
          <div className="w-[330px] flex items-center pb-6 rounded-lg bg-slate-200 shadow-2xl  border">
            <div className="px-4 pt-4">
              <h1 className="font-bold text-lg text-">Bus No: {busNo}</h1>
              <h1 className="font-medium mt-1 text-md text-black">{busRegNo}</h1>
              <button className="mt-1 text-md font-bold text-left ">{route}</button>
              <br />
              <div className="flex gap-5 items-center mt-3">
                <button
                  className=" text-sm px-2 text-white py-1 tracking-widest bg-indigo-500 font-semibold rounded-md"
                  onClick={openPopup}
                >
                  Stages
                </button>
                <button  className=" text-sm px-3 text-white py-1 tracking-widest bg-orange-500 font-semibold rounded-md">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <StagesPopup isOpen={isPopupOpen} onClose={closePopup} stages={stages} />
    </>
  );
};

export default BusCard;
