import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Visibility, VisibilityOff, Edit } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from 'react-icons/io5';
import Breadcrumb from '../../../components/Breadcrumb';
import { Colors } from '../../../values/colors';
import ImageUploader from '../../../components/ImageUploader';

const StudentProfileView = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [bio, setBio] = useState('I am a student passionate about learning.');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setAvatarImage(URL.createObjectURL(file));
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    // Perform save changes logic here
    setEditMode(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Breadcrumb title="Profile" breadcrumb="Home/ Student Portal/ Profile" />
      {/* <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          p:4,
        }}
      >
        <Avatar
          src={avatarImage}
          alt="Profile Avatar"
          sx={{ width: '120px', height: '120px'}}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {editMode ? (
            <>
              <TextField
                label="Full Name"
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Button
                component="label"
                variant="outlined"
                sx={{ marginTop: '8px' }}
              >
                Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAvatarUpload}
                />
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h5">{fullName}</Typography>
              <Button
                variant="outlined"
                sx={{ marginTop: '8px' }}
                startIcon={<Edit />}
                onClick={handleEditMode}
              >
                Edit Profile
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {editMode ? (
          <>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={3}
            />
            <TextField
              label="Bio"
              variant="outlined"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              multiline
              rows={5}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <OutlinedInput
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </>
        ) : (
          <>
            <Typography variant="subtitle1">Email: {email}</Typography>
            <Typography variant="subtitle1">Phone Number: {phoneNumber}</Typography>
            <Typography variant="subtitle1">Address: {address}</Typography>
            <Typography variant="subtitle1">Bio: {bio}</Typography>
          </>
        )}
        {editMode ? (
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        ) : (
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleEditMode}>
            Edit
          </Button>
        )}
      </Box> */}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          p: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 4,
              backgroundColor: Colors.green,
            }}
          />
          <ImageUploader />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          {editMode ? (
            <Box>
              <Typography variant="h2"> Madhura Mihiranga</Typography>
              <Typography
                sx={{
                  color: Colors.secondaryLight,
                  fontSize: 16,
                  mb: 2,
                }}
              >
                Student
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 0.5,
                  fontSize: 16,
                }}
              >
                <IoMailOutline />
                madhura@gmail.com
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 0.5,
                  fontSize: 16,
                }}
              >
                <IoCallOutline /> 0776426210
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 0.5,
                  fontSize: 16,
                }}
              >
                <IoLocationOutline />
                Matara
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flex: 1,
                gap: 1,
              }}
            >
              <TextField
                label="Student Name"
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                label="Student Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                multiline
                rows={2}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          <LoadingButton
            size="small"
            onClick={handleEditMode}
            // loading={isLoading}
            variant="contained"
            // disabled={isLoading}
            sx={{
              width: '30%',
              height: '40px',
              color: Colors.white,
              fontSize: 13,
              alignSelf: 'flex-end',
              backgroundColor: Colors.secondaryLight,
              '&:hover': {
                backgroundColor: Colors.secondaryLight,
              },
            }}
          >
            Edit Profile
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfileView;
