const initialState = {
  item: 0,
  product: [],
  totalPrice: 0,
};
const orderReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "PUT_MYBAG":
      return {
        ...state,
        item: state.item + 1,
        product: [...state.product, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    default:
      return state;
  }
};
export default orderReducer;
