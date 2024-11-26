import React from "react";
import TicketCard from "./TicketCard";

function TicketSection() {
  return (
    <section className="bg-[#172943] py-14">
      <div className="container mx-auto">
        <h1 className="text-[#2ad0bc] text-lg font-medium">Get ready for an unforgettable journey through music</h1>
        <p className="text-white text-6xl font-bold py-5">
          Secure your tickets now and get ready to experience a night of unforgettable performances.
        </p>
        <div className="flex justify-between py-7">
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-[#2ad0bc] text-2xl font-medium">PLEASE NOTE:</h2>
            <p className="text-gray-300 pe-44 py-4 font-medium">
              Don't wait until it's too late! Secure your tickets now to ensure your spot at this extraordinary music event.
            </p>
          </div>
          <div className="w-1/2 ps-16">
            <p className="text-white font-medium py-2">All ticket prices are subject to applicable taxes and service fees.</p>
            <p className="text-white font-medium py-2">Tickets are non-refundable, non-transferable, and cannot be exchanged.</p>
            <p className="text-white font-medium py-2">Children under the age of 10 enter free with a paying adult.</p>
            <p className="text-white font-medium py-2">
              Seating is available on a first-come, first-served basis, except for VIP Pass and Premium Box holders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketSection;
