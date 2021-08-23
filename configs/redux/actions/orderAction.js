export const myBag = (data, history) => (dispatch) => {
  const products = data;
  dispatch({ type: "PUT_MYBAG", payload: products });
  history.push("/mybag");
};

export const checkout = (data,history) =>(dispatch)=> {
  const products = data;
 dispatch( { type: "PUT_MYBAG", payload: products });
   history.push("/checkout");
};
