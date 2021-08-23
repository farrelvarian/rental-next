const initialValue = {
  data: {},
  error: null,
  message: null,
  status: null,
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case "POST_PRODUCT":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case "PUT_PRODUCT":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case "DEL_PRODUCT":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default userReducers;
