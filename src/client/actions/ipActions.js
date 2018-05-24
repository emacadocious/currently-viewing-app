import {
  IP_REQUEST,
  IP_REQUEST_SUCCESS,
  IP_REQUEST_ERROR
} from '../constants/ipConstants';

export const getIPAddress = () => {
  return {
    type: IP_REQUEST,
    payload: 1
  };
};

export const requestSuccess = (ip) => {
  return {
    type: IP_REQUEST_SUCCESS,
    payload: ip
  };
};

export const requestError = (err) => {
  return {
    type: IP_REQUEST_ERROR,
    payload: err
  };
};
