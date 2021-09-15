import { toastify } from "../../../components/layouts/toastify";
import { BASE_URL } from "../../../configs/configs";
const axios = require("axios");
toastify

export const pageProduct = (id,setProducts,setCategories) => (dispatch) => {
  const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      .then((result)=>{
          const dataProduct = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      }
      setProducts(result.data.data[0]);
      dispatch({ type: "GET_PRODUCT", payload: dataProduct });
     axios
       .get(`${BASE_URL}products/category/${result.data.data[0].category_id}`)
       .then((result) => {
         setCategories(result.data.data);
         window.scrollTo(0, 0);
       })
       .catch((error) => {
         toastify(
           error?.response?.data?.message || "error get category",
           "error"
         );
       });})
     .catch((error)=>{toastify(error?.response?.data?.message || "error get product", "error");});

};
export const sellingProductAdd = (products, images) => (dispatch) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("name", products.name);
  formData.append("brand", products.brand);
  formData.append("price", products.price);
  formData.append("description", products.description);
  formData.append("category_id", products.category_id);
  formData.append("category", products.category);
  formData.append("updateAt", products.updateAt);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }

  axios
    .post(`${BASE_URL}products/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      console.log("success add product");
      toastify("success add product", "success");
      dispatch({ type: "POST_PRODUCT", payload: products });
    })
    .catch((error) => {
     toastify(error?.response?.data?.message || "error add product", "error");
    });
};
export const sellingProductUpdate = (products, images,history,params) => (dispatch) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("name", products.name);
  formData.append("brand", products.brand);
  formData.append("price", products.price);
  formData.append("description", products.description);
  formData.append("category_id", products.category_id);
  formData.append("category", products.category);
  formData.append("updateAt", products.updateAt);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  axios
    .put(`${BASE_URL}products/${params.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
         toastify("success update product", "success");
       dispatch({ type: "PUT_PRODUCT", payload: products });
      history.push(`/profile/seller/myproduct`);
    })
    .catch((error) => {
      toastify(error?.response?.data?.message || "error update product", "error");
    });
};
export const myProduct = (id, Refresh, setRefresh) => (dispatch) => {
  const token = localStorage.getItem("token");
 axios
     .delete(`${BASE_URL}products/${id}`, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then(() => {
       console.log("success delete");
       Refresh === true ? setRefresh(false) : setRefresh(true);
     })
 
   .catch((error) => {
     toastify(error?.response?.data?.message || "error delete product", "error");
   });
};
