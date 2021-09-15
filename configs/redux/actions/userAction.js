const axios = require("axios");


export const loginUser = (data,history) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_WEB_URL}api/login`, data, {
      withCredentials: true,
    })
    .then((result) => {
      // const role = result.data.data.role;
      // const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
        //   isAuth: result.data.isAuth,
      };
      console.log(result.data.user,"result action");
      dispatch({ type: "POST_LOGIN", payload: dataUser });
      // history.push(`/${role}/home`);
    })
    .catch((error) => {
      console.log(error.response);
      alert(error?.response?.data?.message||"error login");
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
      alert("register berhasil silahkan cek email anda untuk aktivasi")
    })
    .catch((error) => {
       alert(error?.response?.data?.message || "error register");
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
         headers: {
           Cookie: "token=" + token,
         },
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

       alert("success update data");
     })
     .catch((error) => {
        alert(error?.response?.data?.message || "error update data");
     });
};
export const logoutUser = (history) => () => {
const isAuth = false;
const role = localStorage.getItem("role");
localStorage.setItem("isAuth", isAuth);
history.push(`/login/${role}`);
};