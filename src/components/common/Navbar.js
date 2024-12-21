import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import HamburgerMenu from '../hamburgermenu/HamburgerMenu';
import '../../utils/utility.css';
import logo from '../../assets/images/rgLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from '../../ux/DropdownButton';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const handleLogout = async () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  const onHamburgerMenuToggle = () => {
    setIsVisible(!isVisible);
  };

  const dropdownOptions = [
    { name: 'Profile', onClick: () => navigate('/user-profile') },
    { name: 'Logout', onClick: handleLogout },
  ];

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-4 md:px-12 global-navbar__container bg-white brand-divider-bottom shadow-md">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="site logo" className="site-logo__img" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
        <li className="p-4" style={{ color: '#fe7dbd' }}>
          <Link
            to="/"
            className={`uppercase font-medium hover-underline-animation ${
              isActive('/') ? 'active-link' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li className="p-4" style={{ color: '#fe7dbd' }}>
          <Link
            to="/rooms"
            className={`uppercase font-medium hover-underline-animation ${
              isActive('/rooms') ? 'active-link' : ''
            }`}
          >
            Rooms
          </Link>
        </li>
        <li className="p-4" style={{ color: '#fe7dbd' }}>
          <Link
            to="/about"
            className={`uppercase font-medium hover-underline-animation ${
              isActive('/about') ? 'active-link' : ''
            }`}
          >
            About Us
          </Link>
        </li>
        <li className={`${!isAuthenticated && 'p-4'}`} style={{ color: '#fe7dbd' }}>
          {isAuthenticated ? (
            <DropdownButton triggerType="click" options={dropdownOptions} />
          ) : (
            <Link
              to="/login"
              className={`uppercase font-medium hover-underline-animation ${
                isActive('/login') ? 'active-link' : ''
              }`}
            >
              Login/Register
            </Link>
          )}
        </li>
      </ul>

      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        color="#000"
        className="block md:hidden cursor-pointer"
        onClick={onHamburgerMenuToggle}
      />

      {/* Hamburger Menu */}
      <HamburgerMenu
        isVisible={isVisible}
        onHamburgerMenuToggle={onHamburgerMenuToggle}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
    </nav>
  );
};

export default Navbar;
