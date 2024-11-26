import React from "react";

function TicketCard() {
  return (
    <div className="w-1/3 bg-[#203658] text-center p-5">
      <div className="w-[382x] h-[380px] py-4 ">
        <h1 className="text-white text-xl font-medium py-4">General Admission</h1>
        <p className="text-[#2ad0bc] text-5xl font-bold ">$50</p>
        <button className="bg-[#20a596] hover:bg-[#2ad0bc] text-white font-medium px-24 py-3 transition-colors my-7">BOOK TICKETS</button>
        <p className="text-gray-400 font-medium pt-5 pb-2">Access to the main stage performances</p>
        <p className="text-gray-400 font-medium py-2">Standing room only</p>
        <p className="text-gray-400 font-medium py-2">Limited availability</p>
      </div>
    </div>
  );
}

export default TicketCard;
