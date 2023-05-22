import { Box, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { Colors } from '../../../values/colors';
import IMAGE from '../../../assets/Images/portfolio/portfolio-2.jpg';

const PackageCard = ({
  price,
  title,
  description,
  loading,
  onCheckboxChange,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckboxChange(newChecked); // Pass the newChecked value to the parent component
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box
      sx={{
        // my: 3,
        width: '20%',
        backgroundColor: Colors.white,
        borderRadius: 2,
        boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.29)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.silver,
          px: 2,
          py: 0.5,
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {loading ? (
            <IconButton>
              <CircularProgress color="success" size={25} />
            </IconButton>
          ) : (
            <Checkbox
              {...label}
              defaultChecked
              checked={checked}
              onChange={handleCheckboxChange}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          px: 2,
          py: 1,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${IMAGE})`,
            objectFit: 'contain',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            m: 1,
          }}
        />
        <Box
          sx={{
            m: 1,
            gap: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="400"
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}
          >
            {description}
          </Typography>
          <Typography>$ {price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

PackageCard.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default PackageCard;
