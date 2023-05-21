import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import EventCard from '../components/EventCard';

const EventView = () => {
  const { events } = useSelector((state) => state.AdminReducer);

  const currentDate = new Date(); // Get the current date

  const previousEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate;
  });

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
        {events?.map((eventItem) => (
          <EventCard eventItem={eventItem} />
        ))}
      </Box>

      <Box
        sx={{
          mt: 10,
          mb: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Previous Event Details
        </Typography>

        {previousEvents.map((eventItem) => (
          <EventCard key={eventItem.name} eventItem={eventItem} />
        ))}
      </Box>
    </Box>
  );
};

export default EventView;
