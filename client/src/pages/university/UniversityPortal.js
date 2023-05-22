import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import AddStudentCard from './components/AddStudentCard';
import * as AppActions from '.././../store/actions/AppActions';
import { useDispatch, useSelector } from 'react-redux';

const UniversityPortal = () => {
  const dispatch = useDispatch();
  const { studentList } = useSelector((state) => state.AppReducer);

  useEffect(() => {
    dispatch(AppActions.getStudents());
  }, []);
  return (
    <Box sx={{ m: 2, mt: 10 }}>
      <Breadcrumb
        title="Event Management"
        breadcrumb="Home/ University Portal/ Event Management"
      />

      <Box sx={{ my: 3, mx: 3 }}>
        <Typography variant="h3" fontWeight="400">
          Add Student to Event
        </Typography>
        <AddStudentCard />
      </Box>

      <Box sx={{ my: 3, mx: 3 }}>
        <Typography variant="h3" fontWeight="400">
          Student List
        </Typography>
        {studentList.map((student) => (
          <Box
            key={student._id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 4,
            }}
          >
            <Typography variant="h5" fontWeight="400">
              {student.fullName}
            </Typography>
            <Typography variant="h5" fontWeight="400">
              {student.email}
            </Typography>
            <Typography variant="h5" fontWeight="400">
              {student.phone}
            </Typography>
            <Typography variant="h5" fontWeight="400">
              {student.address}
            </Typography>
            <Typography variant="h5" fontWeight="400">
              {student.fullName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UniversityPortal;
