/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import NavbarAfterLogin from "../../../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../../../components/module/Footer";
import { backBlack, imageVehicle } from "../../../../../../public/assets";
import styled from "styled-components";
import Image from "next/image";
import { breakpoints } from "../../../../../../components/layouts/breakpoints";
import { useRouter } from "next/router";
import cookies from "next-cookies";
import axios from "axios";
import { useEffect, useState } from "react";
import { privateRouteMember } from "../../../../../../configs/route/privateRouteMember";
import { toastify } from "../../../../../../components/layouts/toastify";
import {  useDispatch } from "react-redux";
import { finishReservation } from "../../../../../../configs/redux/actions/orderAction";


const paymentVehicle = (dataVehicle,dataReservation,token) => {
   const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  console.log(data);
  const router = useRouter();
  const [vehicles, setVehicles] = useState({
    name: dataVehicle.name,
    price: dataVehicle.price,
    description: dataVehicle.description,
    category_id: dataVehicle.category_id,
    location_id: dataVehicle.location_id,
    category: dataVehicle.category,
    location: dataVehicle.location,
    stock: dataVehicle.stock,
    status: dataVehicle.status,
    image_id: dataVehicle.image_id,
    image1: dataVehicle.image1,
    image2: dataVehicle.image2,
    image3: dataVehicle.image3,
  });
  const [reservation, setReservation] = useState({
    user_id: dataReservation.user_id,
    vehicle_id: dataReservation.vehicle_id,
    qty: dataReservation.qty,
    date_start: dataReservation.date_start,
    date_stop: dataReservation.date_stop,
    total: dataReservation.total,
    method: "Cash",
    status:"PAID"
  });
   const [users, setUsers] = useState({
     name: "",
     email: "",
     password: "",
     address: "",
     image: "",
     role: "",
     phone: "",
     gender: "",
     dateOfBirth: "",
     status: "",
   });
   useEffect(() => {
     axios
       .get(
         `${process.env.NEXT_PUBLIC_BASE_URL}users/${dataReservation.user_id}`,
         {
           withCredentials: true,
           // headers: {
           //   Cookie: "token=" + token,
           // },
         }
       )
       .then((response) => {
         const [result] = response.data.data;
         setUsers(result);
       })
       .catch(console.error());
   }, []);
  const payment = ["Cash", "Transfer"];
    const handleChange = (e) => {
      setReservation({ method: e.target.value });
    };
  // const paymentReservation = () => {  axios
  //   .post(`${process.env.NEXT_PUBLIC_BASE_URL}reservations/`, reservation, {
  //     withCredentials: true,
  //     headers: {
  //       Cookie: "token=" + token,
  //     },
  //   })
  //   .then((result) => {
  //     toastify("success do reservation", "success");
  //     router.push("/member/history");
  //   })
  //   .catch((error) => {
  //     toastify(
  //       error?.response?.data?.message || "error reservation",
  //       "error"
  //     );
  //   });
  // };
  return (
    <PaymentVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back" onClick={() => router.back()}>
        <Image className="back-icon" src={backBlack} alt="back" />
        Payment
      </button>

      <div className="detail-vehicle">
        <div className="image-wrapper">
          <img src={vehicles.image1} alt="image" layout="fill" />
        </div>
        <div className="desc">
          <h1 className="title-vehicle">{vehicles.name}</h1>
          <p className="location">{vehicles.location}</p>
          <p className="status default">No Prepayment</p>
          <p className="booking-code">#{dataReservation.reservation_id}</p>
          <button className="btn copy">Copy booking code</button>
        </div>
      </div>
      <div className="detail-reservation">
        <div className="detail-row">
          <div className="left">
            <p className="text-label">
              Quantity : {reservation.qty} {vehicles.category}
            </p>
          </div>
          <div className="right date-wrapper">
            <p className="text-label">Reservation Date :</p>
            <p className="text-desc">
              {reservation.date_start} - {reservation.date_stop}
            </p>
          </div>
        </div>
        <div className="detail-row">
          <div className="left order-detail">
            <p className="text-label">Order details :</p>
            <p className="text-desc">
              {reservation.qty} {vehicles.category} : Rp. {reservation.total}
            </p>
            <p className="text-label">Total : Rp. {reservation.total}</p>
          </div>
          <div className="right order-detail">
            <p className="text-label">Identity :</p>
            <p className="text-desc">
              {users?.name} {users?.phone}
            </p>
            <p className="text-desc">{users?.email}</p>
          </div>
        </div>
      </div>
      <div className="payment-method-wrapper">
        <h5 className="text-label">Payment Code :</h5>
        <div className="code-copy-btn">
          <p className="invoice-code">#{dataReservation.reservation_id}</p>
          <button className="btn copy">Copy</button>
        </div>
        <div className="input-group">
          <select
            id="payment-method"
            placeholder="payment-method"
            onChange={handleChange}
            value={reservation.method}
          >
            <option value="" disabled selected>
              select payment method
            </option>
            {payment.map((item) => {
              <option value={item}>{item} </option>;
            })}
          </select>
        </div>
      </div>
      <button
        className="btn finish"
        onClick={() =>
          dispatch(
            finishReservation(
              dataReservation.reservation_id,
              reservation,
              router,
              token
            )
          )
        }
      >
        Finish payment
      </button>
      <Footer />
    </PaymentVehicle>
  );
};

export default paymentVehicle;

export const getServerSideProps = privateRouteMember(async (ctx) => {
  const token = await cookies(ctx).token;
  const { vehicleId } = ctx.params;
  const { reservationId } = ctx.params;
  // const resUser = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}users/${user_id}`,
  //   {
  //     withCredentials: true,
  //     //  headers: {
  //     //    Cookie: "token=" + token,
  //     //  },
  //   }
  // );
  const resVehicle = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${vehicleId}`,
    {
      withCredentials: true,
      // headers: {
      //   Cookie: "token=" + token,
      // },
    }
  );
  const resReservation = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}reservations/${reservationId}`,
    {
      withCredentials: true,
      // headers: {
      //   Cookie: "token=" + token,
      // },
    }
  );
  // const [dataUser] = await resUser.data.data;
  const [dataVehicle] = await resVehicle.data.data;
  const [dataReservation] = await resReservation.data.data;
  return {
    props: { dataVehicle, dataReservation, token },
  };
});

export const PaymentVehicle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button.back {
    align-self: flex-start;
    margin-top: 34px;
    margin-bottom: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 33px;
    color: black;
    width: 391px;
    height: 79px;
    background: transparent;
    border: unset;
    gap: 1rem;
    ${breakpoints.lessThan("xsm")`
           width: 100%
        `}
  }

  .detail-vehicle {
    width: 80%;
    display: flex;
    align-items: center;
    ${breakpoints.lessThan("md")`
    flex-direction:column
    `}
    gap: 3rem;
    .image-wrapper {
      position: relative;
      width: 39%;
      height: 310px;
      ${breakpoints.lessThan("md")`
     width: 100%;
    `}
      img {
        width: 100%;
        height: 317px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .desc {
      .title-vehicle {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        color: #042521;
        margin-bottom: 1rem;
        margin-top: -30px;
      }
      .location {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 24px;
        color: #393939;
        mix-blend-mode: normal;
        margin-bottom: 2rem;
      }
      .status {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: #b8becd;
      }
      .booking-code {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 24px;
      }
      .btn.copy {
        height: 42px;
        width: 240px;
        border-radius: 10px;
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        background-color: #ffcd61;
        color: #393939;
      }
    }
  }
  .detail-reservation {
    width: 80%;
    margin-top: 50px;
    .detail-row {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      ${breakpoints.lessThan("md")`
    flex-direction:column;
    `}
      .left {
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;
        width: 40%;
        ${breakpoints.lessThan("md")`
  width: 100%;
    `} ${breakpoints.lessThan("xsm")`
     padding: 15px;
    `}
        &.order-detail {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .text-label {
          font-family: Nunito;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          margin: 0;
          ${breakpoints.lessThan("xsm")`
     font-size: 17px;
    `}
        }
        .text-desc {
          font-family: Nunito;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          margin: 0;
          ${breakpoints.lessThan("xsm")`
     font-size: 17px;
    `}
        }
      }
      .right {
        width: 60%;
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;
        ${breakpoints.lessThan("md")`
  width: 100%;
    `}
        &.date-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &.order-detail {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
        }
        .text-label {
          font-family: Nunito;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          margin: 0;
          ${breakpoints.lessThan("xsm")`
     font-size: 17px;
    `}
        }
        .text-desc {
          font-family: Nunito;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          margin: 0;
          ${breakpoints.lessThan("xsm")`
     font-size: 17px;
    `}
        }
      }
    }
  }
  .payment-method-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    ${breakpoints.lessThan("lg")`
    flex-direction:column;
    `}
    .text-label {
      font-family: Nunito;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      margin: 0;
    }
    .code-copy-btn {
      border: 1px solid #80918e;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      flex: 1;
      padding: 0 2rem;
      ${breakpoints.lessThan("md")`
  flex-direction:column;
  padding: 1rem 2rem;
    `}
      .invoice-code {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
        ${breakpoints.lessThan("md")`
  margin:15px`}
      }
      .btn.copy {
        margin-left: 30px;
        height: 42px;
        width: 124px;
        border-radius: 10px;
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        background-color: #393939;
        color: #ffcd61;
        ${breakpoints.lessThan("md")`
  margin-left: 0px;
    `}
      }
    }
    .input-group {
      flex: 1;

      select {
        /* margin-right: 30px;
        padding-left: 31px; */
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        width: 350px;
        height: 80px;
        color: #80918e;
        background: #fefefe;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;
        ${breakpoints.lessThan("sm")`
   width: 100%;
    `}
        option {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
          /* width: 400px; */
          height: 80px;
          color: #80918e;
          background: rgba(203, 203, 212, 0.2);
          border-radius: 10px;
          border: unset;
        }
      }
    }
  }
  .btn.finish {
    height: 89px;
    border-radius: 10px;
    border: unset;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    background-color: #ffcd61;
    color: #393939;
    width: 80%;
    .timer {
      color: #9b0a0a;
    }
  }
`;
