const axios = require("axios");
import {toastify} from "../../../components/layouts/toastify" 

export const loginUser = (data,history) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_WEB_URL}api/login`, data, {
      withCredentials: true,
    })
    .then((result) => {
      const role = result.data.data.role;
      // const isAuth = true;
      console.log(result,"result action");
      // const dataUser = {
      //   data: result.data.User.data,
      //   error: result.data.User.error,
      //   message: result.data.User.message,
      //   status: result.data.User.status,
        //   isAuth: result.data.isAuth,
      // };
      // dispatch({ type: "POST_LOGIN", payload: dataUser });
      history.push(`/${role}/home`);
         toastify("Success Login. Happy Shopping!", "success");
    })
    .catch((error) => {
      toastify(error?.response?.data?.message || "error login", "error");
      console.log(error.response);
    });
};
export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}register`, data)
    .then((result) => {
          const role = result.data.data.role;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_REGISTER", payload: dataUser });
      history.push(`/${role}/login`);
        toastify(
          "Success Register. Please check email to verification account",
          "info"
        );
    })
    .catch((error) => {
        toastify(error?.response?.data?.message || "error register", "error");
    });
};
export const updateUser = (id,data, image,token) => (dispatch) => {
   const formData = new FormData();
   formData.append("name", data.name);
   formData.append("email", data.email);
   formData.append("password", data.password);
   formData.append("address", data.address);
   formData.append("image", image);
   formData.append("role", data.role);
   formData.append("phone", data.phone);
   formData.append("gender", data.gender);
   formData.append("dateOfBirth", data.dateOfBirth);
   formData.append("status", data.status);
   formData.append("updateAt", data.updateAt);

   axios
     .put(
       `${process.env.NEXT_PUBLIC_BASE_URL}users/${id}`,
       formData,{
         withCredentials: true,
        //  headers: {
        //    Cookie: "token=" + token,
        //  },
       },
     )
     .then((result) => {
       const dataUser = {
         data: result.data.data,
         error: result.data.error,
         message: result.data.message,
         status: result.data.status,
       };
       dispatch({ type: "PUT_USER", payload: dataUser });
        toastify("success update data", "success");
     })
     .catch((error) => {
        toastify(error?.response?.data?.message || "error update data", "error");
     });
};
export const logoutUser = (history) => () => {
const isAuth = false;
const role = localStorage.getItem("role");
localStorage.setItem("isAuth", isAuth);
history.push(`/login/${role}`);
};