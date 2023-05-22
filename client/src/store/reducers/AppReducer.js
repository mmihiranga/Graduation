import * as AppTypes from '../types/AppTypes';

const initialState = {
  studentName: '',
  studentEmail: '',
  studentPhone: '',
  studentAddress: '',
  studentImage: '',
  isStudentName: true,
  isStudentEmail: true,
  isStudentPhone: true,
  isStudentAddress: true,
  isStudentImage: true,
  studentList:[]
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.SET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
      };
    case AppTypes.SET_STUDENT_NAME:
      return {
        ...state,
        studentName: action.payload,
      };
    case AppTypes.SET_STUDENT_EMAIL:
      return {
        ...state,
        studentEmail: action.payload,
      };
    case AppTypes.SET_STUDENT_PHONE:
      return {
        ...state,
        studentPhone: action.payload,
      };
    case AppTypes.SET_STUDENT_ADDRESS:
      return {
        ...state,
        studentAddress: action.payload,
      };
    case AppTypes.SET_STUDENT_IMAGE:
      return {
        ...state,
        studentImage: action.payload,
      };
    case AppTypes.VALID_STUDENT_NAME:
      return {
        ...state,
        isStudentName: action.payload,
      };
    case AppTypes.VALID_STUDENT_EMAIL:
      return {
        ...state,
        isStudentEmail: action.payload,
      };
    case AppTypes.VALID_STUDENT_PHONE:
      return {
        ...state,
        isStudentPhone: action.payload,
      };
    case AppTypes.VALID_STUDENT_ADDRESS:
      return {
        ...state,
        isStudentAddress: action.payload,
      };
    case AppTypes.VALID_STUDENT_IMAGE:
      return {
        ...state,
        isStudentImage: action.payload,
      };
    case AppTypes.CLEAR_STUDENT_DETAILS:
      return {
        ...state,
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentAddress: '',
        studentImage: '',
        isStudentName: true,
        isStudentEmail: true,
        isStudentPhone: true,
        isStudentAddress: true,
        isStudentImage: true,
      };

    default:
      return state;
  }
};

export default AppReducer;
