import React from "react";
import artist1 from "../assets/images/artist1-img.jpg";
import artist2 from "../assets/images/artist2-img.jpg";
import artist4 from "../assets/images/artist4-img.jpg";
import artist3 from "../assets/images/artist3-img.jpg";
function ArtistInfo() {
  return (
    <section className="py-12 bg-[#172943]">
      <div className="container mx-auto">
        <h1 className="text-[#2ad0bc] text-xl font-medium text-center">Artists Info</h1>
        <p className="text-white text-5xl font-bold px-40 py-6 text-center">
          Join us for a night of pure musical bliss that will create memories to last a lifetime.
        </p>
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="p-4">
            <img src={artist1} alt="Artist 1" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-[#2ad0bc]  font-medium mb-2">Time: 9:00 PM - 10:00 PM</h3>
            <p className="text-white  text-3xl">Isabella Wilson</p>
            <p className="text-gray-300 font-medium py-3">With a voice as smooth as velvet, John is a crooner who effortlessly takes listeners back to the golden age of jazz.</p>
            <button className="bg-[#20a596] hover:bg-[#2ad0bc] text-white font-medium px-7 py-3 transition-colors">
              GET TICKETS
            </button>
          </div>

          <div className="p-4">
            <img src={artist2} alt="Artist 2" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-[#2ad0bc]  font-medium mb-2">Time: 10:00 PM - 11:00 PM</h3>
            <p className="text-white  text-3xl">William Mitchell</p>
            <p className="text-gray-300 font-medium py-3">Energetic and soulful, Maya infuses R&B classics with her own unique style that will get you up and dancing.</p>
            <button className="bg-[#20a596] hover:bg-[#2ad0bc] text-white font-medium px-7 py-3 transition-colors">
              GET TICKETS
            </button>
          </div>

          <div className="p-4">
            <img src={artist4} alt="Artist 3" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-[#2ad0bc]  font-medium mb-2">Time: 11:00 PM - 12:00 PM</h3>
            <p className="text-white  text-3xl">Ethan Anderson</p>
            <p className="text-gray-300 font-medium py-3">Known for her powerful vocals and emotional performances, Sarah's soul-stirring ballads will leave a lasting impression.</p>
            <button className="bg-[#20a596] hover:bg-[#2ad0bc] text-white font-medium px-7 py-3 transition-colors">
              GET TICKETS
            </button>
          </div>

          <div className="p-4">
            <img src={artist3} alt="Artist 4" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-[#2ad0bc]  font-medium mb-2">Time: 12:00 PM - 1:00 AM</h3>
            <p className="text-white  text-3xl">Emma Roberts</p>
            <p className="text-gray-300 font-medium py-3">A true master of the guitar, Mark's virtuosic playing combined with his heartfelt lyrics make for an unforgettable experience.</p>
            <button className="bg-[#20a596] hover:bg-[#2ad0bc] text-white font-medium px-7 py-3 transition-colors">
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistInfo;
