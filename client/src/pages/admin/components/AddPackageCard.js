import React, { useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MdDone } from 'react-icons/md';
import { CiImageOn } from 'react-icons/ci';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../values/colors';
import CustomTextField from '../../../components/CustomTextField';
import * as AdminActions from '../../../store/actions/AdminActions';

const AddPackageCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    packageTitle,
    packageDescription,
    packagePrice,
    packageImage,
    isPackageTitle,
    isPackageDescription,
    isPackagePrice,
    isPackageImage,
  } = useSelector((state) => state.AdminReducer);

  const hasErrors = async () => {
    if (!packageTitle.trim()) {
      await dispatch(
        AdminActions.setPackageValidation(false, 'TITLE')
      );
    }

    if (!packageDescription.trim()) {
      await dispatch(
        AdminActions.setPackageValidation(false, 'DESCRIPTION')
      );
    }

    if (!packagePrice.trim()) {
      await dispatch(
        AdminActions.setPackageValidation(false, 'PRICE')
      );
    }

    if (!packageImage) {
      await dispatch(
        AdminActions.setPackageValidation(false, 'IMAGE')
      );
    }

    

    return (
      isPackageTitle ||
      isPackageDescription ||
      isPackagePrice ||
      isPackageImage
    );
  };

  const handleClickSave = () => {
    // console.log(hasErrors)
    setLoading(true);

    if (!hasErrors()) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        dispatch(AdminActions.setPackageImage(reader.result));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        my: 3,
        width: '80%',
        height: '360px',
        backgroundColor: Colors.white,
        borderRadius: 2,
        boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.29)',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '100%',
            boxSizing: 'border-box',
            backgroundColor: Colors.grey,
            border: !isPackageImage
              ? `1px solid ${Colors.error}`
              : `1px solid ${Colors.greyDivider}`,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: packageImage ? `url(${packageImage})` : 'none',
            objectFit: 'contain',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            cursor: 'pointer',
            transition: 'background-image 0.3s ease',
            overflow: 'hidden',
          }}
          onClick={() => document.getElementById('image-input').click()} // Trigger file input click
        >
          {!packageImage ? (
            <CiImageOn size="50" color={Colors.greyText} />
          ) : null}
          {!packageImage ? (
            <Typography color={Colors.greyText}>
              Click to select Image
            </Typography>
          ) : null}
        </Box>

        <input
          type="file"
          id="image-input"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: 'none' }} // Hide the file input
        />

        <Box
          component="form"
          sx={{
            flex: 2,
            alignSelf: 'baseline',
            gap: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <CustomTextField
            fullWidth
            id="outlined-basic-title"
            label="Package Name"
            variant="outlined"
            value={packageTitle}
            onChange={(e) =>
              dispatch(AdminActions.setPackageTitle(e.target.value))
            }
            error={!isPackageTitle}
            helperText={
              !isPackageTitle && 'This field is required'
            }
          />
          <CustomTextField
            fullWidth
            id="outlined-basic-price"
            label="$ Price"
            variant="outlined"
            value={packagePrice}
            onChange={(e) =>
              dispatch(AdminActions.setPackagePrice(e.target.value))
            }
            error={!isPackagePrice}
            helperText={
              !isPackagePrice && 'This field is required'
            }
          />
          <CustomTextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            value={packageDescription}
            onChange={(e) =>
              dispatch(AdminActions.setPackageDescription(e.target.value))
            }
            error={!isPackageDescription}
            helperText={
              !isPackageDescription &&
              'This field is required'
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
        }}
      >
        <Typography>Enter details to create package</Typography>
        <LoadingButton
          size="small"
          onClick={handleClickSave}
          loading={loading}
          variant="contained"
          disabled={loading}
          startIcon={<MdDone color={Colors.white} />}
          sx={{
            width: '20%',
            height: '40px',
            color: Colors.white,
            backgroundColor: Colors.secondaryLight,
            '&:hover': {
              backgroundColor: Colors.secondaryLight,
            },
          }}
        >
          Save Package
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default AddPackageCard;
