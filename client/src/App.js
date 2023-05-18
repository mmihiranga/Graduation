import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import PageLoader from './components/PageLoader';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './pages/auth/Login';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login'; // Adjust the path if needed

  return (
    <Box>
      {!isLoginPage && <ResponsiveAppBar />}
      {/* Render the HeaderBar component only when not on the login page */}
      <Routes>
        <Route path="/" element={<PageLoader />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
