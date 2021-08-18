import NavbarAfterLogin from "../../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../../components/module/Footer";
import { backBlack, imageVehicle } from "../../../../../public/assets";
import styled from "styled-components";
import Image from "next/image";

const paymentVehicle = () => {
  const payment = ["Cash", "Transfer"];
  return (
    <PaymentVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back">
        <Image className="back-icon" src={backBlack} alt="back" />
        Payment
      </button>

      <div className="detail-vehicle">
        <div className="image-wrapper">
          <Image src={imageVehicle} alt="image" layout="fill" />
        </div>
        <div className="desc">
          <h1 className="title-vehicle">Fixie - Gray Only </h1>
          <p className="location">Yogyakarta</p>
          <p className="status default">No Prepayment</p>
          <p className="booking-code">#FG1209878YZS</p>
          <button className="btn copy">Copy booking code</button>
        </div>
      </div>
      <div className="detail-reservation">
        <div className="detail-row">
          <div className="left">
            <p className="text-label">Quantity : 2 bikes</p>
          </div>
          <div className="right date-wrapper">
            <p className="text-label">Reservation Date :</p>
            <p className="text-desc"> Jan 18 - 20 2021</p>
          </div>
        </div>
        <div className="detail-row">
          <div className="left order-detail">
            <p className="text-label">Order details :</p>
            <p className="text-desc">1 bike : Rp. 78.000</p>
            <p className="text-desc">1 bike : Rp. 78.000</p>
            <p className="text-label">Total : 178.000</p>
          </div>
          <div className="right order-detail">
            <p className="text-label">Identity :</p>
            <p className="text-desc">Samantha Doe (+6290987682)</p>
            <p className="text-desc">samanthadoe@mail.com</p>
          </div>
        </div>
      </div>
      <div className="payment-method-wrapper">
        <h5 className="text-label">Payment Code :</h5>
        <div className="code-copy-btn">
          <p className="invoice-code">#FG1209878YZS</p>
          <button className="btn copy">Copy</button>
        </div>
        <div className="input-group">
          <select id="payment-method" placeholder="payment-method">
            <option value="" disabled selected>
              select payment method
            </option>
            {payment.map((item) => {
              <option value={item}>{item} </option>;
            })}
          </select>
        </div>
      </div>
      <button className="btn finish">
        Finish payment : <span className="timer">59:30</span>
      </button>
      <Footer />
    </PaymentVehicle>
  );
};

export default paymentVehicle;

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
  }
  .detail-vehicle {
    width: 80%;
    display: flex;
    align-items: center;

    gap: 3rem;
    .image-wrapper {
      position: relative;
      width: 39%;
      height: 310px;

      img {
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

      .left {
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;
        width: 40%;

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
        }
        .text-desc {
          font-family: Nunito;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          margin: 0;
        }
      }
      .right {
        width: 60%;
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;

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
        }
        .text-desc {
          font-family: Nunito;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          margin: 0;
        }
      }
    }
  }
  .payment-method-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
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
      .invoice-code {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
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
