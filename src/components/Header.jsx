import React from "react";

function Header() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer text-pink-600">Madhur Events</h1>
        <div className="flex gap-6 text-xl font-medium">
          <a href="" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
          <a href="" className="text-gray-700 hover:text-pink-600 transition-colors">Profile</a>
          <a href="" className="text-gray-700 hover:text-pink-600 transition-colors">Create Event</a>
          <a href="" className="text-gray-700 hover:text-pink-600 transition-colors">Logout</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
