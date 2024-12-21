import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../layout/BaseLayout';

/**
 * BaseLayout Component
 * Renders the base layout for the application.
 * It includes the global navbar, the main content, and the global footer.
 * @returns {JSX.Element} - The BaseLayout component.
 */
const BaseLayout = () => {
  return (
    <>
      <Navbar />
      C
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
