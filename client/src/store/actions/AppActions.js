import * as AppTypes from '../types/AppTypes';
import Api from '../../Api';

export const setLoading = (payload) => ({
  type: AppTypes.SET_LOADING,
  payload,
});

export const showEditStudentPopup = (value) => {
  return (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_EDIT_POPUP,
      payload: value,
    });
  };
};

export const setStudents = (payload) => ({
  type: AppTypes.SET_STUDENTS,
  payload,
});

export const clearStudentDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.CLEAR_STUDENT_DETAILS,
    });
  };
};

export const deleteStudent = (id) => {
  return (dispatch, getState) => {
    const { students } = getState().AppReducer;
    const newStudents = students.filter((item) => item.id !== id);
    dispatch(setStudents(newStudents));
  };
};

export const editStudent = (id) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    console.log('edit');
    dispatch(showEditStudentPopup(false));
    dispatch(setLoading(true));
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get('user/');
      dispatch(setStudents(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createStudent = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const {
        studentName,
        studentEmail,
        studentPhone,
        studentAddress,
        studentImage,
      } = getState().AppReducer;

      const body = {
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
        address: studentAddress,
        image: studentImage,
        userType: 'student',
        password: 'random.id',
      };

      await Api.post('user', body);
      dispatch(clearStudentDetails());
      dispatch(getStudents());
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };
};



export const setStudentValidation = (value, type) => {
  return (dispatch) => {
    switch (type) {
      case 'NAME':
        dispatch({
          type: AppTypes.VALID_STUDENT_NAME,
          payload: value,
        });
        break;

      case 'EMAIL':
        dispatch({
          type: AppTypes.VALID_STUDENT_EMAIL,
          payload: value,
        });
        break;

      case 'PHONE':
        dispatch({
          type: AppTypes.VALID_STUDENT_PHONE,
          payload: value,
        });
        break;

      case 'ADDRESS':
        dispatch({
          type: AppTypes.VALID_STUDENT_ADDRESS,
          payload: value,
        });
        break;

      case 'IMAGE':
        dispatch({
          type: AppTypes.VALID_STUDENT_IMAGE,
          payload: value,
        });
        break;

      default:
        break;
    }
  };
};

export const setStudentName = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_NAME,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'NAME'));
  };
};

export const setStudentEmail = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_EMAIL,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'EMAIL'));
  };
};

export const setStudentPhone = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_PHONE,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'PHONE'));
  };
};

export const setStudentAddress = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_ADDRESS,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'ADDRESS'));
  };
};
export const setStudentImage = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_IMAGE,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'IMAGE'));
  };
};
