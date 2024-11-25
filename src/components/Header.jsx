import React from "react";
import logo from "../assets/images/site-logo.png";
import headerBg from "../assets/images/homebg-img.jpg";

function Header() {
  return (
    <section className="h-screen bg-cover bg-center bg-no-repeat py-4" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex gap-6 text-white font-medium">
            <a href="" className="hover:text-blue-500">
              About
            </a>
            <a href="" className="hover:text-blue-500">
              Schedule
            </a>
            <a href="" className="hover:text-blue-500">
              Artist
            </a>
            <a href="" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-white font-bold py-10">
          <h2 className="text-5xl py-4">12-14 July / New York</h2>
          <p className="text-8xl">The Ultimate Musical Extravaganza!</p>
          <button className="bg-[#20A5A5] hover:bg-[#6EC1E4] text-white px-10 py-4 my-12">BOOK TICKETS</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
