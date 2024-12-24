// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import layouts
import BaseLayout from './layout/BaseLayout';
import AdminLayout from './layout/AdminLayout';

// Import pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Import context and utilities
import { AuthProvider, useAuth } from './context/AuthContext';
import Adminaddrooms from './components/admin/adminaddrooms';
import Adminviewrooms from './components/admin/adminviewrooms';
import Adminaddbookings from './components/admin/adminaddbookings';
import Adminviewbookings from './components/admin/adminviewbookings';
import Adminreviews from './components/admin/adminreviews';
import Adminusers from './components/admin/adminusers';
import Adminaddcoupons from './components/admin/adminaddcoupons';
import Adminpromotionmail from './components/admin/adminpromotionalmail';
import Adminsettings from './components/admin/adminsettings';
import RegisterPage from './pages/RegisterPage';

// Protected Route Component with role-based access
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Routes with BaseLayout */}
          <Route element={<BaseLayout />}>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected User Routes */}
            <Route
              path="/booking/:roomId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Admin Routes - These will be outside BaseLayout */}
          <Route element={<AdminLayout/>}>
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboardPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminaddrooms"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminaddrooms/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminviewrooms"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminviewrooms/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminaddbookings"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminaddbookings/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminviewbookings"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminviewbookings/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminreviews"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminreviews/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminusers"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminusers/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminaddcoupons"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminaddcoupons/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpromotionmail"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminpromotionmail/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminsettings"
            element={
              <ProtectedRoute adminOnly={true}>
                <Adminsettings/>
              </ProtectedRoute>
            }
          />
          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;