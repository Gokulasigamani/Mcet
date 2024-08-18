import BusCard from './BusCard';
import { card1Data, card2Data,card3Data,card4Data,card5Data } from './CardData';

const BusBooking = () => {
  const busCards = [card1Data, card2Data,card3Data,card4Data,card5Data];

  return (
    <div className=' max-sm:w-full items-center justify-center m-auto flex flex-col gap-5'>
      {busCards.map((cardData, index) => (
        <BusCard
          key={index}
          busNo={cardData.busNo}
          busRegNo={cardData.busRegNo}
          route={cardData.route}
          stages={cardData.stages}
        />
      ))}
    </div>
  );
};

export default BusBooking;
