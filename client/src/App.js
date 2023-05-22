import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import PageLoader from './components/PageLoader';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './pages/auth/Login';
import Footer from './components/Footer';
import PersistentDrawer from './pages/admin/PersistentDrawer';
import RegisterUniversity from './pages/auth/RegisterUniversity';
import StudentPortal from './pages/student/StudentPortal';

function App() {
  const location = useLocation();
  const isShowHeader =
    location.pathname === '/login' || location.pathname === '/admin'; // Adjust the path if needed
  const isShowFooter = location.pathname === '/admin';

  const isChangeHeaderColor =
    !!(location.pathname === '/' || location.pathname ==='/home'); 

  return (
    <Box>
      {!isShowHeader && (
        <ResponsiveAppBar isChangeColor={isChangeHeaderColor} />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/regUniversity"
          element={
            <Suspense fallback={<PageLoader />}>
              <RegisterUniversity />
            </Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<PageLoader />}>
              <PersistentDrawer />
            </Suspense>
          }
        />

        <Route
          path="/student"
          element={
            <Suspense fallback={<PageLoader />}>
              <StudentPortal />
            </Suspense>
          }
        />
      </Routes>

      {!isShowFooter && <Footer />}
    </Box>
  );
}

export default App;
