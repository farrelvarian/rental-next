/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import NavbarAfterLogin from "../../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../../components/module/Footer";
import {
  backBlack,
  nextBlack,
  plus,
  minus,
  like,
  imageVehicle,
} from "../../../../../public/assets";
import styled from "styled-components";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { breakpoints } from "../../../../../components/layouts/breakpoints";
import cookies from "next-cookies";
import { privateRouteMember } from "../../../../../configs/route/privateRouteMember";
import {  useDispatch } from "react-redux";

const reservationVehicle = ({dataVehicle,token},req) => {
    const dispatch = useDispatch();
   const { query } = useRouter();
   const userId = cookies(req).user_id;
   const id = Number(query.vehicleId);
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
    updatedAt: new Date(),
  });
    const [form, setForm] = useState({
      user_id: userId,
      vehicle_id: id,
      qty: 1,
      date_start: new Date(),
      date_stop: new Date(),
      total: dataVehicle.price,
    });
   const handleQty = (params) => {
     if (params === "plus" && form.qty < vehicles.stock) {
       setForm({
         ...form,
         qty: form.qty + 1,
         total: dataVehicle.price * form.qty,
       });
     }
     if (params === "minus" && form.qty > 1) {
       setForm({
         ...form,
         qty: form.qty - 1,
         total: dataVehicle.price * form.qty,
       });
     }
   };
  // const gotoPayment = () => {
  //   router.push(`/member/vehicle/${id}/reservation/payment`);
  // };
  return (
    <ReservationVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back" onClick={() => router.back()}>
        <Image className="back-icon" src={backBlack} alt="back" />
        Reservation
      </button>
      <section className=" detail-vehicle">
        <div className="galery-wrapper">
          <div className="image-main">
            <img src={vehicles.image1} alt="vehicle" />
          </div>
        </div>
        <div className="detail-info">
          <h1 className="title-vehicle">{vehicles.name}</h1>
          <p className="location">{vehicles.location}</p>
          <p className="paymentOption red">No prepayment</p>
          <div className="amount-wrapper">
            <button className="btn primary" onClick={() => handleQty("minus")}>
              <Image className="minus-icon" src={minus} alt="minus" />
            </button>{" "}
            <input className="btn count" type="number" value={form.qty}></input>
            {/* <p className="btn count">2</p> */}
            <button className="btn secondary" onClick={() => handleQty("plus")}>
              <Image className="plus-icon" src={plus} alt="plus" />
            </button>
          </div>
          <p className="reservation">Reservation Date :</p>
          <input
            type="text"
            className="date"
            name="date"
            placeholder="select date"
            // onChange={(e) => handleForm(e)}
          />
          <select
            value={vehicles.category_id}
            // onChange={(e) => handleForm(e)}
            className="btn duration"
            id="duration"
            name="duration"
          >
            <option name="duration" value="1">
              1 Day
            </option>
            <option name="duration" value="2">
              2 Days
            </option>
            <option name="duration" value="3">
              3 Days
            </option>
          </select>
        </div>
      </section>
      <section className=" button-action-wrapper">
        <button
          className="btn pay"
          onClick={() => dispatch(addReservation(form, router,id,token))}
        >
          Pay Now : Rp. {form.total}
        </button>
      </section>
      <Footer />
    </ReservationVehicle>
  );
};

export default reservationVehicle;

export const getServerSideProps = privateRouteMember(async (ctx) => {
  const token = await cookies(ctx).token;
  const { vehicleId } = ctx.params;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${vehicleId}`,
    {
      withCredentials: true,
      headers: {
        Cookie: "token=" + token,
      },
    }
  );
  const [dataVehicle] = await res.data.data;
  return {
    props: {dataVehicle,token},
  };
});

// export async function getServerSideProps(ctx) {
//   const token = await cookies(ctx).token;
//   const { vehicleId } = ctx.params;
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${vehicleId}`,  {
//           withCredentials: true,
//           headers: {
//             Cookie: "token=" + token,
//           },
//         },
//   );
//   const [dataVehicle] = await res.data.data;
//   return {
//     props: dataVehicle,
//   };
// }

export const ReservationVehicle = styled.div`
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
      width:100%
    `}
  }
  .detail-vehicle {
    display: flex;
    gap: 3rem;
    margin-bottom: 80px;
    ${breakpoints.lessThan("lg")`
        gap: 0rem;
    `}
    ${breakpoints.lessThan("md")`
      margin-bottom: 50px;  
      flex-direction: column; 
    `}
   
   
    .galery-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      .image-main {
        position: relative;

        img {
          width: 696px;
          height: 616px;
          object-fit: cover;
          border-radius: 10px;
          ${breakpoints.lessThan("2xl")`
        width: 500px; 
      `}
          ${breakpoints.lessThan("xl")`
        width: 400px; 
      `}
      ${breakpoints.lessThan("md")` 
        width: 100%; 
      `}
        }
      }
    }
    .detail-info {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      .title-vehicle {
        margin-top: 0px;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        color: #042521;
        margin-bottom: 15px;
      }
      .location {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 24px;
        color: #393939;
        mix-blend-mode: normal;
        margin-bottom: 15px;
        margin-top: 0;
      }

      .paymentOption {
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 15px;
        margin-top: 15px;
        &.red {
          color: #9b0a0a;
        }
      }
      .reservation {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
      }
      .date {
        height: 80px;
        width: 100%;
        border-radius: 10px;
        background: rgba(203, 203, 212, 0.2);
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        color: #80918e;
        margin-bottom: 15px;
      }
      .duration {
        height: 80px;
        width: 100%;
        border-radius: 10px;
        background: rgba(203, 203, 212, 0.2);
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        color: #80918e;
        option {
          border: unset;
        }
      }
      .amount-wrapper {
        display: flex;
        justify-content: space-around;
        /* position: absolute; */
        bottom: 1;
        width: 100%;
        ${breakpoints.lessThan("md")`
          position: relative;
          margin-top: 2rem;
        `}
        input.btn.count {
          height: 72px;
          text-align:center
        }
        .btn {
          height: 10px;
          border: 0;
          box-sizing: content-box;
          padding: 27px;
          border-radius: 10px;
          &.count {
            margin-top: 0;
            padding-top: 0;
            font-family: Nunito;
            font-style: normal;
            font-weight: 900;
            font-size: 48px;
            /* line-height: 25px; */
            color: #000000;
          }
          &.primary {
            background: #ffcd61;
          }
          &.secondary {
            background: rgba(203, 203, 212, 0.2);
          }
        }
      }
    }
  }

  .button-action-wrapper {
    display: flex;
    gap: 2rem;
    width: 80%;
    ${breakpoints.lessThan("sm")`
      flex-direction: column; 
      gap: 1rem; 
    `}

    .btn {
      height: 89px;
      border-radius: 10px;
      border: unset;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 25px;
    }
    .pay {
      background-color: #ffcd61;
      color: #393939;
      width: 100%;
    }
  }
`;
