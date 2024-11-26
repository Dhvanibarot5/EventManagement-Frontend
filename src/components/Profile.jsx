import React from "react";
import img1 from "../assets/images/profile-01.jpg";
import img2 from "../assets/images/profile-02.jpg";
import img3 from "../assets/images/profile-03.jpg";

function Profile() {
  return (
    <section className="bg-[#172943]">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-[#2ad0bc] text-lg font-medium">Meet the masterminds behind this extraordinary event</h1>
          <p className="text-white text-6xl font-bold py-10">
            Brought to you by a passionate team of organizers who strive to create an exceptional experience for music lovers.
          </p>
        </div>
        <div className="flex py-5">
          <div className="w-1/2">
            <img src={img1} alt="" className="w-[400px] object-cover" />
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-extrabold">John Anderson</h1>
            <p className="text-[#2ad0bc] font-medium mt-4">EVENT DIRECTOR</p>
            <div className="border border-gray-500 w-12 mt-5"></div>
            <p className="text-gray-300 font-medium py-5">
              With over 10 years of experience in event management, John leads the team with his impeccable organizational skills and creative vision.
              His passion for music and expertise in executing large-scale events ensure that every detail is meticulously planned and executed to
              perfection.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-7"></div>
        <div className="flex py-5">
          <div className="w-1/2">
            <img src={img2} alt="" className="w-[400px] object-cover" />
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-extrabold">Sarah Roberts</h1>
            <p className="text-[#2ad0bc] font-medium mt-4">MARKETING MANAGER</p>
            <div className="border border-gray-500 w-12 mt-5"></div>
            <p className="text-gray-300 font-medium py-5">
              Look no further than the Music Event! Our annual gathering of top talent from the world of music offers a unique opportunity for brands
              to connect with fans and build their reputation in the industry. With a range of sponsorship and marketing opportunities available, the
              Music Event is the perfect platform to elevate your brand across this vibrant and exciting industry.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-7"></div>
        <div className="flex py-5">
          <div className="w-1/2">
            <img src={img3} alt="" className="w-[400px] object-cover" />
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-extrabold">Emily Collins</h1>
            <p className="text-[#2ad0bc] font-medium mt-4">TICKETING & LOGISTICS</p>
            <div className="border border-gray-500 w-12 mt-5"></div>
            <p className="text-gray-300 font-medium py-5">
              The Music Event makes it easy for you to attend by providing hassle-free ticketing and logistics services. You can purchase your tickets
              conveniently online and receive them via email. Our team ensures smooth entry into the event venue. We also offer transportation and
              parking solutions to guarantee a seamless experience for all attendees.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-7"></div>
      </div>
    </section>
  );
}

export default Profile;
