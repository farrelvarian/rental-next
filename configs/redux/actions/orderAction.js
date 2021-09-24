const axios = require("axios");
import { toastify } from "../../../components/layouts/toastify";

export const addReservation = (data, router, id,token) => (dispatch) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_WEB_URL}reservations`, data, {
       withCredentials: true,
      // headers: {
      //   Cookie: "token=" + token,}
    })
    .then((result) => {
      const endData = result.data.data;
      router.push(
        `/member/vehicle/${id}/reservation/payment/${endData.reservation_id}`
      );
      return dispatch({ type: "ADD_RESERVATION", payload: endData });
    })
    .catch((error) => {
      console.log(error);
      return toastify(
        error?.response?.data?.message || "error reservation",
        "error"
      );
    });
};

export const finishReservation = (id, data, router,token) => (dispatch) => {
  axios
    .put(`${process.env.NEXT_PUBLIC_WEB_URL}reservations/${id}`, data, {
      withCredentials: true,
      // headers: {
      //   Cookie: "token=" + token,
      // },
    })
    .then(async () => {
      console.log(data, "data finish payment");
      dispatch({ type: "FINISH_RESERVATION" });
      toastify("success finish payment", "success");
      router.push(`/member/history`);
    })
    .catch((error) => {
      console.log(error);
      return toastify(
        error?.response?.data?.message || "error payment",
        "error"
      );
    });
};
