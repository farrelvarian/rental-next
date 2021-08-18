
import NavbarAfterLogin from "../../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../../components/module/Footer";
import {
  backBlack,
  plus,
  minus,
  imageVehicle,
} from "../../../../../public/assets";
import styled from "styled-components";
import Image from "next/image";

const reservationVehicle = () => {
     const date = [];
  return (
    <ReservationVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back">
        <Image className="back-icon" src={backBlack} alt="back" />
        Reservation
      </button>
      <div className="main">
        <div className="image-wrapper">
          <Image src={imageVehicle} layout="fill" alt="image" />
        </div>
        <div className="detail-wrapper">
          <h1 className="title-vehicle">Fixie - Gray Only </h1>
          <p className="location">Yogyakarta</p>
          <p className="status green">Available</p>
          <div className="amount-wrapper">
            <button className="btn primary">
              <Image className="minus-icon" src={minus} alt="minus" />
            </button>
            <p className="btn count">2</p>
            <button className="btn secondary">
              <Image className="plus-icon" src={plus} alt="plus" />
            </button>
          </div>
          <h3 className="date-title">Reservation Date :</h3>
          <div className="input-group">
            <input type="text" className="date" placeholder="Select date" />
          </div>
          <div className="input-group">
            <select id="date" placeholder="date">
              <option value="" disabled selected>
                1 Day
              </option>
              {date.map((item) => {
                <option value={item}>{item} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <button className="btn pay">Pay now : Rp. 178.000</button>
      <Footer />
    </ReservationVehicle>
  );
};

export default reservationVehicle;

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
  }
  .main {
    width: 80%;
    display: flex;
    gap: 2rem;
    margin-bottom: 16px;

    .image-wrapper {
      width: 50%;
      height: 500px;
      position: relative;

      img {
        object-fit: cover;
        border-radius: 25px;
        filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
      }
    }
    .detail-wrapper {
      width: 50%;

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
        &.green {
          color: #087e0d;
        }
      }
      .amount-wrapper {
        display: flex;
        justify-content: space-between;
        bottom: 1;
        width: 50%;
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
    .date-title {
      margin: 1rem 0;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 25px;
      color: #393939;
    }
    .input-group {
      margin-bottom: 2rem;
      input.date {
        padding-left: 41px;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        width: 400px;
        height: 80px;
        color: #80918e;
        background: rgba(203, 203, 212, 0.2);
        border-radius: 10px;
        border: unset;
      }
      select {
        margin-right: 30px;
        padding-left: 31px;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        width: 400px;
        height: 80px;
        color: #80918e;
        background: rgba(203, 203, 212, 0.2);
        border-radius: 10px;
        border: unset;
        option {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
          width: 400px;
          height: 80px;
          color: #80918e;
          background: rgba(203, 203, 212, 0.2);
          border-radius: 10px;
          border: unset;
        }
      }
    }
  }
  .btn.pay {
    gap: 2rem;
    background-color: #ffcd61;
    color: #393939;
    width: 80%;
  }
`;