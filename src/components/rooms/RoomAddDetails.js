import React, { useState, useRef } from 'react';
import { DateRange } from "react-date-range";
import { enUS } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useOutsideClickHandler from '../../hooks/useOutsideClickHandler';

const RoomAddDetails = ({ bookingData, onDateChange }) => {
  // State for date range picker
  const [range, setRange] = useState([
    {
      startDate: bookingData.checkIn ? new Date(bookingData.checkIn) : null,
      endDate: bookingData.checkOut ? new Date(bookingData.checkOut) : null,
      key: "selection",
    },
  ]);

  // State for calendar visibility
  const [isCheckInVisible, setIsCheckInVisible] = useState(false);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);

  // Refs for click outside handling
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  // Close calendars when clicking outside
  useOutsideClickHandler(checkInRef, () => {
    setIsCheckInVisible(false);
    // Ensure date changes are propagated when calendar closes
    if (range[0].startDate && range[0].endDate) {
      onDateChange({
        checkIn: range[0].startDate,
        checkOut: range[0].endDate
      });
    }
  });

  useOutsideClickHandler(checkOutRef, () => {
    setIsCheckOutVisible(false);
    // Ensure date changes are propagated when calendar closes
    if (range[0].startDate && range[0].endDate) {
      onDateChange({
        checkIn: range[0].startDate,
        checkOut: range[0].endDate
      });
    }
  });


  // Handle date selection
  const handleSelect = (ranges) => {
    const selectedRange = ranges.selection;
    setRange([selectedRange]);
    
    // Immediately update parent component if both dates are selected
    if (selectedRange.startDate && selectedRange.endDate) {
      onDateChange({
        checkIn: selectedRange.startDate,
        checkOut: selectedRange.endDate
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-pink-500 mb-6">Booking Details</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Total Price</h3>
          <div className="text-3xl font-bold text-indigo-600">
            {typeof bookingData.totalPrice === 'number' 
              ? `${bookingData.totalPrice.toLocaleString()} INR`
              : `${bookingData.totalPrice} INR`
            }
          </div>
          <p className="text-sm text-green-600 mt-1">{bookingData.cancellationPolicy}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Dates & Time</h3>
          <div className="flex gap-4">
            {/* Check-in Date Input */}
            <div className="flex-1 relative" ref={checkInRef}>
              <input
                type="text"
                value={range[0].startDate ? range[0].startDate.toLocaleDateString("en-GB") : ''}
                onClick={() => {
                  setIsCheckInVisible(true);
                  setIsCheckOutVisible(false);
                }}
                readOnly
                className="w-full p-2 border rounded cursor-pointer"
                placeholder="Check-in"
              />
              {isCheckInVisible && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-lg">
                  <DateRange
                    locale={enUS}
                    ranges={range}
                    onChange={handleSelect}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                  />
                </div>
              )}
            </div>

            {/* Check-out Date Input */}
            <div className="flex-1 relative" ref={checkOutRef}>
              <input
                type="text"
                value={range[0].endDate ? range[0].endDate.toLocaleDateString("en-GB") : ''}
                onClick={() => {
                  setIsCheckOutVisible(true);
                  setIsCheckInVisible(false);
                }}
                readOnly
                className="w-full p-2 border rounded cursor-pointer"
                placeholder="Check-out"
              />
              {isCheckOutVisible && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-lg">
                  <DateRange
                    locale={enUS}
                    ranges={range}
                    onChange={handleSelect}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Reservation</h3>
          <select className="w-full p-2 border rounded">
            <option>{bookingData.guests} guests</option>
          </select>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Per day rate</h3>
          <div className="text-lg">{bookingData.perDayRate} INR</div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Taxes</h3>
          <div className="text-lg mb-1">{bookingData.taxes} INR</div>
          <p className="text-sm text-gray-600">
            GST: {bookingData.gstDetails}
          </p>
        </div>

        <button className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default RoomAddDetails;