import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import PackageCard from '../components/PackageCard';
import AddPackageCard from '../components/AddPackageCard';

const PackagesView = () => {
  const { packages } = useSelector((state) => state.AdminReducer);

  return (
    <Box>
      <Breadcrumb
        title="Photography Packages"
        breadcrumb="Admin Panel/Package"
      />

      <Box
        sx={{
          my: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Add Photography Package
        </Typography>

        <AddPackageCard />
      </Box>

      <Box
        sx={{
          my: 3,
          ml: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Current Active Packages
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {packages?.map((item) => (
            <PackageCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PackagesView;
