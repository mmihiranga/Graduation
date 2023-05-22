import React, { useState } from 'react';
import { Box, Grid, Button, IconButton, Checkbox } from '@mui/material';
import { GiCheckedShield } from 'react-icons/gi';
import Breadcrumb from '../../../components/Breadcrumb';
import { GALLERY_ITEMS } from '../../../constants';

const StudentGalleryView = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (imageId) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(imageId)) {
        return prevSelected.filter((id) => id !== imageId);
      } 
        return [...prevSelected, imageId];
      
    });
  };

  const handleDownloadSelected = () => {
    // Perform download action for selected images
    // Here you can implement the logic to download the selected images
    console.log('Downloading selected images:', selectedImages);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Breadcrumb title="Profile" breadcrumb="Home/ Student Portal/ Gallery" />
      <Box>Gallery</Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {GALLERY_ITEMS.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '200px',
                borderRadius: '4px',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Checkbox
                checked={selectedImages.includes(item.id)}
                onChange={() => handleImageSelect(item.id)}
                color="primary"
                sx={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          disabled={selectedImages.length === 0}
          onClick={handleDownloadSelected}
        >
          Download Selected
        </Button>
      </Box>
    </Box>
  );
};

export default StudentGalleryView;
