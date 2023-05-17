import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <Box>
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
      </Routes>
    </Box>
  );
}

export default App;
