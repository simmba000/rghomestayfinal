import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { enUS } from "date-fns/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useSearchContext } from "../../context/SearchContext";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import '../../utils/utility.css';

const GlobalSearchBox = ({ variant = "full", onSearch }) => {
  const { searchState, updateSearchState } = useSearchContext();
  const navigate = useNavigate();

  const [range, setRange] = useState([
    {
      startDate: searchState.checkIn ? new Date(searchState.checkIn) : null,
      endDate: searchState.checkOut ? new Date(searchState.checkOut) : null,
      key: "selection",
    },
  ]);
  
  // Separate states for check-in and check-out visibility
  const [isCheckInVisible, setIsCheckInVisible] = useState(false);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);
  
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  // Close calendars when clicking outside
  useOutsideClickHandler(checkInRef, () => setIsCheckInVisible(false));
  useOutsideClickHandler(checkOutRef, () => setIsCheckOutVisible(false));

  const handleSelect = (ranges) => {
    const selectedRange = ranges.selection;
    setRange([selectedRange]);
    updateSearchState({
      checkIn: selectedRange.startDate,
      checkOut: selectedRange.endDate,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { checkIn, checkOut } = searchState;

    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    // If onSearch prop is provided (for RoomsPage), use it
    if (onSearch) {
      onSearch(e);
      return;
    }

    // Default navigation for HeroCover
    navigate(
      `/rooms?checkIn=${checkIn.toISOString()}&checkOut=${checkOut.toISOString()}&guests=${searchState.guests}`,
      { 
        state: {
          destination: searchState.destination,
          checkIn: checkIn.toLocaleDateString("en-GB"),
          checkOut: checkOut.toLocaleDateString("en-GB"),
          guests: searchState.guests
        } 
      }
    );
  };

  // Determine classes based on variant
  const containerClasses = variant === "full" 
    ? "flex flex-wrap justify-center gap-4" 
    : "container mx-auto flex flex-col md:flex-row gap-4 justify-center";

  const inputClasses = {
    destination: "relative w-full md:w-64",
    dates: "relative w-full md:w-auto",
    guests: "relative w-full md:w-64",
    button: "w-full md:w-auto px-6 py-2 rounded-lg bg-button-hover hover:bg-button text-white"
  };

  return (
    <form className={containerClasses} onSubmit={handleSearch}>
      {/* Destination Input */}
      <div className={inputClasses.destination}>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-black pl-10"
          value={searchState.destination}
          readOnly
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </div>

      {/* Check-In Input */}
      <div className={`relative ${inputClasses.dates}`} ref={checkInRef}>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-black pl-10 cursor-pointer"
          placeholder="Check-In"
          value={
            searchState.checkIn
              ? searchState.checkIn.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "Check-In"
          }
          readOnly
          onClick={() => setIsCheckInVisible(true)}
        />
        <FontAwesomeIcon
          icon={faCalendar}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
        
        {/* Calendar for Check-In */}
        {isCheckInVisible && (
          <div
            className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-lg"
          >
            <DateRange
              locale={enUS}
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={range}
              minDate={new Date()}
            />
          </div>
        )}
      </div>

      {/* Check-Out Input */}
      <div className={`relative ${inputClasses.dates}`} ref={checkOutRef}>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-black pl-10 cursor-pointer"
          placeholder="Check-Out"
          value={
            searchState.checkOut
              ? searchState.checkOut.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "Check-Out"
          }
          readOnly
          onClick={() => setIsCheckOutVisible(true)}
        />
        <FontAwesomeIcon
          icon={faCalendar}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />

        {/* Calendar for Check-Out */}
        {isCheckOutVisible && (
          <div
            className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-lg"
          >
            <DateRange
              locale={enUS}
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={range}
              minDate={new Date()}
            />
          </div>
        )}
      </div>

      {/* Guests Input */}
      <div className={inputClasses.guests}>
        <input
          type="number"
          className="w-full px-4 py-2 text-gray-500 border rounded-lg pl-10"
          placeholder="No. Of Guests"
          min="1"
          max="10"
          value={searchState.guests}
          onChange={(e) => 
            updateSearchState({ guests: parseInt(e.target.value) || 1 })
          }
        />
        <FontAwesomeIcon
          icon={faPerson}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className={inputClasses.button}
      >
        Search
      </button>
    </form>
  );
};

export default GlobalSearchBox;
