import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Import pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Import context (for authentication)
import { AuthProvider, useAuth } from './context/AuthContext';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';


// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    // Redirect to home if not an admin trying to access admin routes
    return <Navigate to="/" replace />;
  }

  return children;
};

// Main App Routing
function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ScrollToTop/>
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Protected Booking Route */}
              <Route 
                path="/booking/:roomId" 
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin Protected Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* 404 Not Found Route */}
              <Route 
                path="*" 
                element={<Navigate to="/" replace />} 
              />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;

// Example of how to use in App.js
// import AppRoutes from './AppRoutes';
// function App() {
//   return <AppRoutes />;
// }