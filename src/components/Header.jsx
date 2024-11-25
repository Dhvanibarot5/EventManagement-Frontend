import React from "react";

function Header() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">Madhur Events</h1>
        <div className="flex gap-6 text-xl font-medium">
          <a href="">Home</a>
          <a href="">Profile</a>
          <a href="">Create Event</a>
          <a href="">Logout</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
