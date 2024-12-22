import React, { useState } from 'react';

const Dropdown = ({ triggerType = 'click', options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown menu visibility.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the option click and performs the assigned action.
   * @param {Function} onClick - The function to execute when the option is clicked.
   */
  const handleOptionClick = (onClick) => {
    onClick && onClick();
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center px-4 py-2 font-medium text-gray-700 bg-white border rounded shadow-md hover:bg-gray-100"
        onClick={triggerType === 'click' ? toggleDropdown : undefined}
        onMouseEnter={triggerType === 'hover' ? () => setIsOpen(true) : undefined}
        onMouseLeave={triggerType === 'hover' ? () => setIsOpen(false) : undefined}
      >
        My Account
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 w-48 py-2 mt-2 bg-white border rounded shadow-lg"
          onMouseEnter={triggerType === 'hover' ? () => setIsOpen(true) : undefined}
          onMouseLeave={triggerType === 'hover' ? () => setIsOpen(false) : undefined}
        >
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleOptionClick(option.onClick)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
