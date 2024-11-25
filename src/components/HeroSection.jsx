import React from "react";
import videoImg from "../assets/images/home-vid-img.jpg";

function HeroSection() {
  return (
    <section className=" bg-[#172943] pt-36 pb-16">
      <div className="container mx-auto flex">
        <div className="m-2 w-1/2 pe-24 py-7">
          <h1 className="text-[#2ad0bc] font-semibold py-5">RHYTHM & HARMONY</h1>
          <p className="text-white font-extrabold text-5xl py-5">About Last Night</p>
          <p className="text-gray-300">
            Relive the magic and energy of last night's Music Event! The evening was filled with breathtaking performances by legendary artists that
            left the audience in awe. Whether it was the soulful tunes or the electrifying beat, the crowd couldn't have enough of it! Check out our
            post-event recap to relive those fantastic moments and feel the music once again.
          </p>
          <div className="flex gap-14 py-16">
          <div className="">
            <p className="text-5xl font-extrabold text-[#2ad0bc]">15+</p>
            <p className="text-2xl text-white font-semibold">Music Artists</p>
          </div>
          <div className="">
            <p className="text-5xl font-extrabold text-[#2ad0bc]">100+</p>
            <p className="text-2xl text-white font-semibold ">Songs</p>
          </div>
          <div className="">
            <p className="text-5xl font-extrabold text-[#2ad0bc]">10+</p>
            <p className="text-2xl text-white font-semibold ">Places</p>
          </div>
          </div>
        </div>
        <div className="m-2 w-1/2 relative">
          <img src={videoImg} alt="" className="h-[500px] w-full object-cover"/>
        <i class="fa-regular fa-circle-play absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl"></i>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
