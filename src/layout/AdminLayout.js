import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import AdminSidebar from '../components/admin/adminsidebar';
import AdminNavbar from '../components/admin/adminnavbar';

/**
 * BaseLayout Component
 * Renders the base layout for the application.
 * It includes the global navbar, the main content, and the global footer.
 * @returns {JSX.Element} - The BaseLayout component.
 */
const AdminLayout= () => {
  return (
    <>
      <AdminNavbar/>
      <AdminSidebar/>
      <ScrollToTop/>
      <Outlet />
     
    </>
  );
};

export default AdminLayout;
