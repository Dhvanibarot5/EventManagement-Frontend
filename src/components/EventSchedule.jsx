import React from "react";

function EventSchedule() {
  return (
    <section className="py-12 bg-[#172943]">
      <div className="container mx-auto text-center">
        <h1 className="text-[#2ad0bc] text-xl font-medium">Get ready for an unforgettable journey through music</h1>
        <p className="text-white text-5xl font-bold px-40 py-6">
          Here's a glimpse into the event schedule, so you can plan your day and ensure you don't miss a single moment!
        </p>
        {/* <div className="flex justify-center">
          <div className="w-1/2 bg-[#203658] py-16">
            <p className="text-[#2ad0bc] text-2xl">6:00 PM</p>
            <p className="text-[#2ad0bc] text-2xl">7:30 PM</p>
            <p className="text-[#2ad0bc] text-2xl">9:00 PM</p>
            <p className="text-[#2ad0bc] text-2xl">10:30 PM</p>
            <p className="text-[#2ad0bc] text-2xl">12:30 PM</p>
          </div>
          <div className="w-1/2 bg-[#203658] ">
            <p>Opening Act</p>
            <p>Ethan Anderson</p>
            <p>Olivia Thompson</p>
            <p>Benjamin Reed</p>
            <p>Grand Finale - All-Star Jam</p>
          </div>
        </div> */}
        <div className="bg-[#203658] px-24 py-24 my-7">
          <div className="flex justify-between items-center">
            <p className="text-[#2ad0bc] text-2xl py-4">6:00 PM</p>
            <p className="text-white text-2xl py-4">Opening Act</p>
          </div>
          <div className="border border-gray-500"></div>
          <div className="flex justify-between items-center">
            <p className="text-[#2ad0bc] text-2xl py-4">7:30 PM</p>
            <p className="text-white text-2xl py-4">Ethan Anderson</p>
          </div>
            <div className="border border-gray-500"></div>
          <div className="flex justify-between items-center">
            <p className="text-[#2ad0bc] text-2xl py-4">9:00 PM</p>
            <p className="text-white text-2xl py-4  ">Olivia Thompson</p>
          </div>
          <div className="border border-gray-500"></div>
          <div className="flex justify-between items-center">
            <p className="text-[#2ad0bc] text-2xl py-4  ">10:30 PM</p>
            <p className="text-white text-2xl py-4">Benjamin Reed</p>
          </div>
            <div className="border border-gray-500"></div>
          <div className="flex justify-between items-center">
            <p className="text-[#2ad0bc] text-2xl py-4">12:30 PM</p>
            <p className="text-white text-2xl py-4">Grand Finale - All-Star Jam</p>
          </div>
          <div className="border border-gray-500"></div>
        </div>
        <p className="text-white text-3xl">Get ready to immerse yourself in an <br /> extraordinary musical experience</p>
        <button className="bg-[#20A5A5] hover:bg-[#6EC1E4] text-white px-10 py-4 mt-7 font-medium">BOOK TICKETS</button>
      </div>
    </section>
  );
}

export default EventSchedule;
