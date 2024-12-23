import logo from '../../assets/images/rgLogo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useAuth } from '../../context/AuthContext';

const AdminNavbar = () => {
  const auth = useAuth(); // Assuming `logout` exists in AuthContext
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    if (auth && auth.logout) {
      auth.logout();
      navigate('/');
    }
  };

  return (
    <div className="relative flex flex-wrap justify-between items-center px-4 md:px-12 global-navbar__container bg-white brand-divider-bottom shadow-md">
      {/* Logo */}
      <div className="flex">
        <Link to="/">
          <img src={logo} alt="site logo" className="site-logo__img" />
        </Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-button text-white rounded-md hover:bg-button-hover transition duration-300"
        style={{ marginLeft: 'auto' }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;
