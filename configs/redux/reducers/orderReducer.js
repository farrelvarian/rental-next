
const initialValue = {
  data: [],
};

const orderReducer = (state = initialValue, action) => {
   switch (action.type) {
     case "ADD_RESERVATION":
       return {
         ...state,
         data: action.payload,
       };
     case "FINISH_RESERVATION":
       return {
         ...state,
         data: [],
       };
     default:
       return state;
   }
};

export default orderReducer;
