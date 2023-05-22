import * as AdminTypes from '../types/AdminTypes';

export const setPackages = (payload) => ({
  type: AdminTypes.SET_PACKAGE,
  payload,
});

export const deletePackage = (id) => {
  return (dispatch, getState) => {
    const { adminReducer } = getState();
    const { packages } = adminReducer;
    const newPackages = packages.filter((item) => item.id !== id);
    dispatch(setPackages(newPackages));
  };
};

export const setPackageValidation = (value, type) => {
  return (dispatch) => {
    switch (type) {
      case 'TITLE':
        dispatch({
          type: AdminTypes.SET_TITLE_VALIDATION,
          payload: value,
        });
        break;

      case 'DESCRIPTION':
        dispatch({
          type: AdminTypes.SET_DESCRIPTION_VALIDATION,
          payload: value,
        });
        break;

      case 'PRICE':
        dispatch({
          type: AdminTypes.SET_PRICE_VALIDATION,
          payload: value,
        });
        break;

      case 'IMAGE':
        dispatch({
          type: AdminTypes.SET_IMAGE_VALIDATION,
          payload: value,
        });
        break;

      default:
        break;
    }
  };
};

export const setPackageTitle = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AdminTypes.SET_PACKAGE_TITLE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'TITLE'));
  };
};

export const setPackageDescription = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AdminTypes.SET_PACKAGE_DESCRIPTION,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'DESCRIPTION'));
  };
};

export const setPackagePrice = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AdminTypes.SET_PACKAGE_PRICE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'PRICE'));
  };
};
export const setPackageImage = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AdminTypes.SET_PACKAGE_IMAGE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'IMAGE'));
  };
};
