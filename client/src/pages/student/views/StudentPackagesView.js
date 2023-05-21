import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { BsCart } from 'react-icons/bs';
import Breadcrumb from '../../../components/Breadcrumb';
import PackageCard from '../../admin/components/PackageCard';
import { Colors } from '../../../values/colors';

const StudentPackagesView = () => {
  const { packages } = useSelector((state) => state.AdminReducer);
  const [checkedItems, setCheckedItems] = useState([]);
  const loading = false;

  const handleCheckboxChange = (checkedItem, isChecked) => {
    if (isChecked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, checkedItem]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item.id !== checkedItem.id)
      );
    }
  };

  const handleCheckout = () => {
    console.log('checkout',checkedItems);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Breadcrumb title="Profile" breadcrumb="Home/ Student Portal/ Packages" />

      <Box sx={{ my: 3, mx: 3 }}>
        {/* <Box sx={{ my: 3, mx: 3 }}>
          <Typography>Checked Items:</Typography>
          <List>
            {checkedItems.map((itemId) => {
              const selectedItem = packages.find((item) => item.id === itemId);
              return (
                <ListItem key={itemId}>
                  <ListItemText primary={selectedItem.title} />
                  <ListItemText primary={`Price: $${selectedItem.price}`} />
                </ListItem>
              );
            })}
          </List>
          <Typography>Total Price: ${calculateTotalPrice()}</Typography>
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            pr: 8,
          }}
        >
          <Typography variant="h3" fontWeight="400">
            Available Photography Packages ({checkedItems.length})
          </Typography>
          <LoadingButton
            size="small"
            onClick={handleCheckout}
            loading={loading}
            variant="contained"
            disabled={loading}
            endIcon={<BsCart color={Colors.white} />}
            sx={{
              width: '15%',
              height: '40px',
              color: Colors.white,
              fontSize: 13,
              backgroundColor: Colors.secondaryLight,
              '&:hover': {
                backgroundColor: Colors.secondaryLight,
              },
            }}
          >
            Checkout
          </LoadingButton>
        </Box>

        <Box
          sx={{
            mt: 3,
            width: '100%',
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {packages?.map((item) => (
            <PackageCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              loading={false}
              onCheckboxChange={(isChecked) =>
                handleCheckboxChange(item, isChecked)
              }
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StudentPackagesView;
