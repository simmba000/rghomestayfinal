import React from "react";
import agninav from "../assets/images/agninav.jpg";
import rangghar from "../assets/images/rangghar.jpg";
import karengghar from "../assets/images/kareng.jpg";
import talatalghar from "../assets/images/talatalghar.jpg";
import PopularDestinations from "../components/home/PopularDestinations";
import HeroCover from "../components/home/HeroCover";

const HomePage = () => {
  return (
    <>
      <HeroCover />
     <PopularDestinations
        agninav={agninav}
        rangghar={rangghar}
        karengghar={karengghar}
        talatalghar={talatalghar}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-brand text-center mb-8">
            Handpicked Best Rooms for You
          </h2>
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="room-placeholder.jpg"
                  alt="Luxury AC Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-brand mb-2">Luxury AC Room</h3>
                <p className="text-black mb-4">
                  Kalyani Nagar, Sivasagar | 3.3 kms from city center
                </p>
                <ul className="list-disc ml-6 mb-4 text-black">
                  <li>Free cancellation</li>
                  <li>No prepayment needed — pay at the property</li>
                  <li>Free WiFi</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">
                    ₹5,500
                  </span>
                  <button className="px-4 py-2 bg-button text-white font-semibold rounded-lg hover:bg-button-hover">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
