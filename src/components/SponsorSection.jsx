import React from 'react'
import img1 from "../assets/images/logo01.svg";
import img2 from "../assets/images/logo02.svg";
import img3 from "../assets/images/logo03.svg";
import img4 from "../assets/images/logo04.svg";
import img5 from "../assets/images/logo05.svg";
function SponsorSection() {
  return (
    <section className="bg-[#172943] py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-[#2ad0bc] font-semibold text-lg">Sponsors</h1>
        <p className="text-white text-5xl font-bold py-5 px-48">We extend our heartfelt gratitude to our esteemed sponsors whose support has made our music event possible.</p>
        <div className="flex justify-center items-center gap-10 my-14">
          <img src={img1} alt="" className="w-32 mx-4" /> 
          <div className="border-e border-gray-500 h-52 "></div>
          <img src={img2} alt="" className="" />
          <div className="border-e border-gray-500 h-52"></div>
          <img src={img3} alt="" className="w-32 mx-4" />
          <div className="border-e border-gray-500 h-52"></div>
          <img src={img4} alt="" className="w-32 mx-4" />
          <div className="border-e border-gray-500 h-52"></div>
          <img src={img5} alt="" className="w-32 mx-4" />
        </div>
      </div>
    </section>
  );
}

export default SponsorSection