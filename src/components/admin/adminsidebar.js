import React, { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquarePollVertical, faPlus, faEye, faPenToSquare, faBook, faPerson, faCircleUser, faTags, faPaperPlane, faSliders } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Hamburger Menu (Visible only on smaller screens) */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <NavLink to="/admin" activeClassName="active">
          <FontAwesomeIcon icon={faSquarePollVertical} style={{ paddingRight: '8px' }} /> Dashboard
        </NavLink>
        <NavLink to="/adminaddrooms" activeClassName="active">
          <FontAwesomeIcon icon={faPlus} style={{ paddingRight: '8px' }} /> Add Rooms
        </NavLink>
        <NavLink to="/adminviewrooms" activeClassName="active">
          <FontAwesomeIcon icon={faEye} style={{ paddingRight: '8px' }} /> View Rooms
        </NavLink>
        <NavLink to="/adminaddbookings" activeClassName="active">
          <FontAwesomeIcon icon={faPenToSquare} style={{ paddingRight: '8px' }} /> Add Bookings
        </NavLink>
        <NavLink to="/adminviewbookings" activeClassName="active">
          <FontAwesomeIcon icon={faBook} style={{ paddingRight: '9px' }} /> View Bookings
        </NavLink>
        <NavLink to="/adminreviews" activeClassName="active">
          <FontAwesomeIcon icon={faPerson} style={{ paddingRight: '11px' }} /> Reviews
        </NavLink>
        <NavLink to="/adminusers" activeClassName="active">
          <FontAwesomeIcon icon={faCircleUser} style={{ paddingRight: '8px' }} /> Users
        </NavLink>
        <NavLink to="/adminaddcoupons" activeClassName="active">
          <FontAwesomeIcon icon={faTags} style={{ paddingRight: '8px' }} /> Add Coupons
        </NavLink>
        <NavLink to="/adminpromotionmail" activeClassName="active">
          <FontAwesomeIcon icon={faPaperPlane} style={{ paddingRight: '8px' }} /> Promotion Mail
        </NavLink>
        <NavLink to="/adminsettings" activeClassName="active">
          <FontAwesomeIcon icon={faSliders} style={{ paddingRight: '8px' }} /> Settings
        </NavLink>
      </div>
    </>
  );
};

export default AdminSidebar;
