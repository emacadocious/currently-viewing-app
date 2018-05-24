import {
  IP_REQUEST,
  IP_REQUEST_SUCCESS,
  IP_REQUEST_ERROR
} from '../constants';

const initialState = {
  loading: true,
  ip: undefined,
  error: undefined
};

export default function ipAddress(state = initialState, action) {
  switch (action.type) {
    case IP_REQUEST_SUCCESS:
      return {
        ...state,
        ip: action.ip,
        loading: false
      };

    case IP_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case IP_REQUEST:
    default:
      return state;
  }
}
