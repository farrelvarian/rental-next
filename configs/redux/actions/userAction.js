const axios = require("axios");


export const loginUser = (data,history) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}login`, data)
    .then((result) => {
      const token = result.data.data.token;
      const id = result.data.data.id;
      const role = result.data.data.role;
      const name = result.data.data.name;
      const image = result.data.data.image;
      const address = result.data.data.address;
      const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
        //   isAuth: result.data.isAuth,
      };
      dispatch({ type: "POST_LOGIN", payload: dataUser });
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      localStorage.setItem("image", image);
      localStorage.setItem("address", address);
      localStorage.setItem("isAuth", isAuth);

      history.push(`/${role}/home`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}register`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_REGISTER", payload: dataUser });
      history.push(`/${result.data.data.role}/login`);
      alert("register berhasil silahkan cek email anda untuk aktivasi")
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const updateUser = (id,data, image) => (dispatch) => {
  const token = localStorage.getItem("token");
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
     .put(`${process.env.NEXT_PUBLIC_BASE_URL}users/${id}`, formData, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((result) => {
       const image = result.data.data.image;
       const name = result.data.data.name;
       const address = result.data.data.address;
       const dataUser = {
         data: result.data.data,
         error: result.data.error,
         message: result.data.message,
         status: result.data.status,
       };
       dispatch({ type: "PUT_USER", payload: dataUser });
       localStorage.setItem("image", image);
       localStorage.setItem("name", name);
       localStorage.setItem("address", address);
       alert("success update data");
     })
     .catch((error) => {
       alert(error.response.data.message);
     });
};
export const logoutUser = (history) => () => {
const isAuth = false;
const role = localStorage.getItem("role");
localStorage.setItem("isAuth", isAuth);
history.push(`/login/${role}`);
};