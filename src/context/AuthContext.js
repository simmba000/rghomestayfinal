// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
          setIsAuthenticated(true);
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // For demo purposes, we'll simulate the API response
      let token;
      
      // Check for admin credentials
      if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
        // Create admin token
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluMTIzIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTkyNTMyOTYwMH0';
      } 
      // Check for regular user credentials
      else if (credentials.email === 'user1@example.com' && credentials.password === 'password1') {
        // Create user token
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxMjMiLCJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJleHAiOjE5MjUzMjk2MDB9';
      }
      // Handle social login
      else if (credentials.provider) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNvY2lhbDEyMyIsImVtYWlsIjoic29jaWFsQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJleHAiOjE5MjUzMjk2MDB9';
      }
      else {
        throw new Error('Invalid credentials');
      }

      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      setIsAuthenticated(true);
      return decoded; // Return decoded user for immediate access to role
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isAdmin: user?.role === 'admin',
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);