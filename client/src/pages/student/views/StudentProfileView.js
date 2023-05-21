import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Visibility, VisibilityOff, Edit } from '@mui/icons-material';
import Breadcrumb from '../../../components/Breadcrumb';

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <Avatar
          src={avatarImage}
          alt="Profile Avatar"
          sx={{ width: '120px', height: '120px' }}
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
      </Box>
    </Box>
  );
};

export default StudentProfileView;
