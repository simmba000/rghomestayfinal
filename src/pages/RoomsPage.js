import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";
import GlobalSearchBox from "../ux/global-search-box/GlobalSearchbox";

const dummyRooms = [
  {
    id: 1,
    name: "Luxury AC Room",
    location: "Kalyani Nagar, Sivasagar",
    distance: "3.3 kms from city center",
    price: 5500,
    image: "https://via.placeholder.com/400x250",
    features: ["Free cancellation", "Pay at the property", "Free WiFi"],
  },
  {
    id: 2,
    name: "Deluxe Room",
    location: "Station Road, Sivasagar",
    distance: "2 kms from city center",
    price: 3500,
    image: "https://via.placeholder.com/400x250",
    features: ["Free cancellation", "Air conditioning", "Free parking"],
  },
  {
    id: 3,
    name: "Standard Non-AC Room",
    location: "AT Road, Sivasagar",
    distance: "1.5 kms from city center",
    price: 1500,
    image: "https://via.placeholder.com/400x250",
    features: ["No prepayment", "24/7 Support"],
  },
];

const RoomsPage = () => {
  const location = useLocation();
  const { searchState, updateSearchState } = useSearchContext();
  const [rooms, setRooms] = useState(dummyRooms);
  const [sortType, setSortType] = useState("");

  // Fetch initial state from URL or location state
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const checkInParam = queryParams.get("checkIn");
    const checkOutParam = queryParams.get("checkOut");
    const guestsParam = queryParams.get("guests");

    // Check if the date is valid before proceeding
    const isValidDate = (dateStr) => {
      const date = new Date(dateStr);
      return !isNaN(date.getTime());
    };

    // Only update state if valid and differs from the current state
    if (
      checkInParam &&
      checkOutParam &&
      isValidDate(checkInParam) &&
      isValidDate(checkOutParam)
    ) {
      const checkInDate = new Date(checkInParam);
      const checkOutDate = new Date(checkOutParam);
      if (
        checkInDate.toISOString() !== searchState.checkIn?.toISOString() ||
        checkOutDate.toISOString() !== searchState.checkOut?.toISOString()
      ) {
        updateSearchState({
          checkIn: checkInDate,
          checkOut: checkOutDate,
          guests: guestsParam ? parseInt(guestsParam) : 1,
        });
      }
    } else if (location.state) {
      const { checkIn, checkOut, guests, destination } = location.state;
      updateSearchState({
        checkIn: checkIn ? new Date(checkIn) : null,
        checkOut: checkOut ? new Date(checkOut) : null,
        guests: guests || 1,
        destination: destination || "Sivasagar, Assam",
      });
    }
  }, [location.state, location.search, searchState.checkIn, searchState.checkOut, updateSearchState]);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortType(value);

    let sortedRooms = [...rooms];
    if (value === "lowToHigh") {
      sortedRooms.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sortedRooms.sort((a, b) => b.price - a.price);
    }
    setRooms(sortedRooms);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching rooms with:", searchState);
  };

  return (
    <section className="min-h-screen">
      <div className="bg-brand py-6">
        <GlobalSearchBox variant="rooms" onSearch={handleSearch} />
      </div>

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center text-brand mb-8">Available Rooms</h1>

        <div className="flex justify-end mb-6">
          <select
            value={sortType}
            onChange={handleSort}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-brand font-bold mb-2">{room.name}</h3>
                  <p className="text-black mb-2">{room.location}</p>
                  <p className="text-black mb-4">{room.distance}</p>
                  <ul className="list-disc ml-6 mb-4 text-black">
                    {room.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                      ₹{room.price}
                    </span>
                    <button className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No rooms available for the selected dates.
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomsPage;
