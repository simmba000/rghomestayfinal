import React, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RoomGalleryAndInfo from '../components/rooms/RoomGalleryAndInfo';
import RoomReviews from '../components/rooms/RoomReviews';
import RoomAddDetails from '../components/rooms/RoomAddDetails';

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const [roomData, setRoomData] = useState(location.state?.roomData);
  const [searchDetails, setSearchDetails] = useState(location.state?.searchDetails);
  const [bookingData, setBookingData] = useState(() => calculateInitialBookingData());
  // Transform room data for the hotel info component
  const hotelData = {
    name: roomData?.name || "",
    location: roomData?.location || "",
    distance: roomData?.distance || ""
  };

  function calculateInitialBookingData() {
    return {
      totalPrice: calculateTotalPrice(roomData?.price, searchDetails),
      cancellationPolicy: "Free cancellation 1 day prior to stay",
      checkIn: searchDetails?.checkIn?.toLocaleDateString() || "",
      checkOut: searchDetails?.checkOut?.toLocaleDateString() || "",
      guests: searchDetails?.guests || 1,
      perDayRate: roomData?.price || 0,
      taxes: calculateTaxes(roomData?.price),
      gstDetails: "12% on INR 0-2,500, 12% on INR 2,500-7,500, 18% on INR 7,500 and above"
    };
  }

  // Handle date changes from RoomAddDetails
  const handleDateChange = ({ checkIn, checkOut }) => {
    const newSearchDetails = {
      ...searchDetails,
      checkIn,
      checkOut
    };
    setSearchDetails(newSearchDetails);

    // Recalculate booking data with new dates
    const newTotalPrice = calculateTotalPrice(roomData?.price, newSearchDetails);
    const newTaxes = calculateTaxes(newTotalPrice);

    setBookingData(prev => ({
      ...prev,
      totalPrice: newTotalPrice,
      checkIn: checkIn.toLocaleDateString(),
      checkOut: checkOut.toLocaleDateString(),
      taxes: newTaxes
    }));
  };

  // Dummy reviews data - you can replace this with actual reviews
  const reviews = [
    {
      name: "Rahul Patel",
      date: "2021-01-01",
      rating: 5,
      comment: "The hotel is very good and the staff is very friendly. The food is also very good.",
      verified: true
    },
    {
      name: "Sara Johnson",
      date: "2021-02-15",
      rating: 4,
      comment: "Great hotel with excellent service. The rooms are spacious and clean.",
      verified: false
    }
  ];

  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RoomGalleryAndInfo hotelData={hotelData} />
            <RoomReviews
              reviews={reviews}
              overallRating={4.5}
              totalReviews={15}
            />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <RoomAddDetails bookingData={bookingData}
               onDateChange={handleDateChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for price calculations
function calculateTotalPrice(pricePerDay, searchDetails) {
  if (!pricePerDay || !searchDetails?.checkIn || !searchDetails?.checkOut) {
    return 0;
  }
  
  const checkIn = new Date(searchDetails.checkIn);
  const checkOut = new Date(searchDetails.checkOut);
  const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  
  if (days <= 0) return 0;
  
  const basePrice = pricePerDay * days;
  const taxes = calculateTaxes(basePrice);
  return basePrice + taxes;
}

function calculateTaxes(basePrice) {
  if (!basePrice) return 0;
  return Math.round(basePrice * 0.18); // 18% GST
}


export default RoomDetailsPage;