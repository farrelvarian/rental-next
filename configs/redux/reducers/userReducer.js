const initialValue = {
  data: {},
  error: null,
  message:null,
  status:null,

};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case "POST_REGISTER":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case "PUT_USER":
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
