import React from "react";
import img1 from "../assets/images/home-vid-img.jpg";
import img2 from "../assets/images/gallery-02.jpg";
import img3 from "../assets/images/gallery-03.jpg";
import img4 from "../assets/images/gallery-04.jpg";
import img5 from "../assets/images/gallery-05.jpg";
import img6 from "../assets/images/gallery06.jpg";

function Gallery() {
  return (
    <section className="bg-[#172943] py-14">
      <div className="container mx-auto text-center">
        <h1 className="text-[#2ad0bc] text-lg font-medium">Gallery</h1>
        <p className="text-white text-5xl font-bold py-5 px-28">
          Take a glimpse into the electrifying atmosphere and memorable moments from our past music events.
        </p>
        
        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* First Row */}
          <div className="overflow-hidden ">
            <img src={img1} alt="Event 1" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="overflow-hidden ">
            <img src={img2} alt="Event 2" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="overflow-hidden ">
            <img src={img3} alt="Event 3" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          
          {/* Second Row */}
          <div className="overflow-hidden ">
            <img src={img4} alt="Event 4" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="overflow-hidden ">
            <img src={img5} alt="Event 5" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="overflow-hidden ">
            <img src={img6} alt="Event 6" className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
