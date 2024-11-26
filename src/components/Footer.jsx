import React from "react";
import logo from "../assets/images/site-logo.png";

function Footer() {
  return (
    <section className="bg-[#172943] py-5">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-4 gap-4 text-white text-start">
          <div className="p-5">
            <img src={logo} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium pb-5">ABOUT THE EVENT</h2>
            <ul className="font-medium">
              <li className="pb-2">About</li>
              <li className="pb-2">Schedule</li>
              <li className="pb-2">Artist</li>
              <li className="pb-2">Contact</li>
            </ul>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium pb-5">ABOUT THE EVENT</h2>
            <p className="text-gray-400 font-medium">
              Join us for an unforgettable musical experience at the Music Event, featuring renowned artists and diverse genres to please every
              listener.
            </p>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium pb-5">CONTACT INFO</h2>
            <ul className="font-medium">
                <li className="pb-2">A: 13 Fifth Avenue, New York, NY</li>
                <li className="pb-2">101660</li>
                <li className="pb-2">P: 555-345-4599</li>
                <li className="pb-2">E: contact@info.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 mb-5"></div>
        <div className="flex justify-between items-center py-5">
            <p className="text-gray-300">Copyright © 2024 Music Event</p>
            <div className="flex gap-4 text-xl text-gray-300">
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
