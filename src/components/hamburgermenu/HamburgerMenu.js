import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

/**
 * HamburgerMenu Component
 * Styled as per the template with consistent design and active state underline color.
 *
 * @param {Object} props - Props for the component.
 * @param {boolean} props.isVisible - Controls the visibility of the hamburger menu.
 * @param {Function} props.onHamburgerMenuToggle - Callback function to toggle the visibility of the menu.
 * @param {boolean} props.isAuthenticated - Indicates whether the user is authenticated.
 */
const HamburgerMenu = (props) => {
  const { isVisible, onHamburgerMenuToggle, isAuthenticated } = props;
  const location = useLocation();

  // Function to check active state
  const isActive = (path) => location.pathname === path;

  return (
    <div
      data-testid="hamburger-menu"
      className={`bg-brand shadow-2xl z-20 text-white ${
        isVisible ? 'fixed right-0 w-1/2 top-0 h-screen' : 'hidden'
      }`}
    >
      {/* Close Button */}
      <div className="absolute right-5 top-4">
        <FontAwesomeIcon
          data-testid="menu-close__button"
          icon={faXmark}
          size="2x"
          color="#fff"
          onClick={onHamburgerMenuToggle}
        />
      </div>

      {/* Navigation Links */}
      <ul className="list-none mt-16 space-y-6 text-lg font-medium text-center uppercase">
        <li>
          <Link
            to="/"
            onClick={onHamburgerMenuToggle}
            className={`hover:underline decoration-4 decoration-[#7f0239] ${
              isActive('/') ? 'underline decoration-[#7f0239]' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/rooms"
            onClick={onHamburgerMenuToggle}
            className={`hover:underline decoration-4 decoration-[#7f0239] ${
              isActive('/rooms') ? 'underline decoration-[#7f0239]' : ''
            }`}
          >
            Hotels
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={onHamburgerMenuToggle}
            className={`hover:underline decoration-4 decoration-[#7f0239] ${
              isActive('/about') ? 'underline decoration-[#7f0239]' : ''
            }`}
          >
            About Us
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button
              onClick={() => {
                onHamburgerMenuToggle();
                // Handle Logout
              }}
              className="text-red-500 hover:underline decoration-4 decoration-[#7f0239]"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              onClick={onHamburgerMenuToggle}
              className={`hover:underline decoration-4 decoration-[#7f0239] ${
                isActive('/login') ? 'underline decoration-[#7f0239]' : ''
              }`}
            >
              Login/Register
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
