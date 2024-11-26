import React from "react";
import bg from "../assets/images/footerbg-img.jpg";
function EndSection() {
  return (
    <section 
      className="bg-[#172943] h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.8)
        ), url(${bg})`
      }}
    >
      <div className="container mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h1 className="text-[#2ad0bc] font-semibold text-lg pb-3 pt-36">
          Get ready to experience the ultimate musical extravaganza!
        </h1>
        <p className="text-white text-6xl font-bold px-24 pt-3">
          Secure your spot now and be a part of the most unforgettable music event of the year.
        </p>
        <p className="text-white font-medium px-80 py-5">
          Don't miss out on the opportunity to see your favorite artists live on <br /> 
          stage. Click here to buy your tickets and let the melodies move you!
        </p>
        <button className="bg-[#2ad0bc] hover:bg-[#20a596] text-white px-10 py-3 mt-5 transition-colors">
          BOOK TICKETS
        </button>
      </div>
    </section>
  );
}

export default EndSection;
