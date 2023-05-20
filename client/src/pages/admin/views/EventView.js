import { Box, Typography } from '@mui/material';
import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import EventCard from '../components/EventCard';

const EventView = () => {
  return (
    <Box>
      <Breadcrumb title="Event Details" breadcrumb="Admin Panel/Event" />
      <Box
        sx={{
          my: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Up Coming Event Details
        </Typography>

        <EventCard />
        <EventCard />
      </Box>

      <Box
        sx={{
          mt: 10,
          mb: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Completed Coming Event Details
        </Typography>

        <EventCard />
      </Box>
    </Box>
  );
};

export default EventView;
