
import NavbarAfterLogin from "../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../components/module/Footer";
import { backBlack,nextBlack,plus,minus,like,imageVehicle } from "../../../../public/assets";
import styled from "styled-components";
import Image from "next/image";

const detailVehicle = () => {
  return (
    <DetailVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back">
        <Image className="back-icon" src={backBlack} alt="back" />
        Detail
      </button>
      <section className=" detail-vehicle">
        <div className="galery-wrapper">
          <div className="image-main">
            <Image src={imageVehicle} alt="vehicle" layout="fill" />
          </div>
          <div className="item-wrapper">
            <div className="control prev">
              <button type="button" className="back">
                <Image className="back-icon" src={backBlack} alt="back" />
              </button>
            </div>
            <div className="item-main">
              <div className="item">
                <Image src={imageVehicle} alt="vehicle" layout="fill" />
              </div>
              <div className="item">
                <Image src={imageVehicle} alt="vehicle" layout="fill" />
              </div>
            </div>
            <div className="control next">
              <button type="button" className="back">
                <Image className="next-icon" src={nextBlack} alt="next" />
              </button>
            </div>
          </div>
        </div>
        <div className="detail-info">
          <h1 className="title-vehicle">Fixie - Gray Only </h1>
          <p className="location">Yogyakarta</p>
          <p className="status green">Available</p>
          <p className="paymentOption red">No prepayment</p>
          <p className="detail">Capacity : 1 person</p>
          <p className="detail">Type : Bike</p>
          <p className="detail">Reservation before 2 PM</p>
          <p className="price">Rp. 78.000/day</p>
          <div className="amount-wrapper">
            <button className="btn primary">
              <Image className="minus-icon" src={minus} alt="minus" />
            </button>
            <p className="btn count">2</p>
            <button className="btn secondary">
              <Image className="plus-icon" src={plus} alt="plus" />
            </button>
          </div>
        </div>
      </section>
      <section className=" button-action-wrapper">
        <button className="btn chat">Chat Admin</button>
        <button className="btn reserve">Reservation</button>
        <button className="btn like">
          <Image className="like-icon" src={like} alt="like" />
          Like
        </button>
      </section>
      <Footer />
    </DetailVehicle>
  );
};

export default detailVehicle;

export const DetailVehicle = styled.div`
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
    display: flex;
    gap: 3rem;
    margin-bottom: 80px;

    .galery-wrapper {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .image-main {
        position: relative;
        width: 100%;
        height: 400px;
        img {
          border-radius: 10px;
          filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
          object-fit: cover;
        }
      }
      .item-wrapper {
        display: flex;
        gap: 2rem;
        justify-content: center;
        .control {
          width: 50px;
          display: flex;
          align-items: center;
        }
        .item-main {
          display: flex;
          gap: 1rem;
          .item {
            position: relative;
            width: 200px;
            height: 150px;

            img {
              border-radius: 10px;
              filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
              object-fit: cover;
            }
          }
        }
      }
    }
    .detail-info {
      flex: 1;
      position: relative;
      .title-vehicle {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        color: #042521;
        margin-bottom: 1rem;
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
      .paymentOption {
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 2rem;
        &.red {
          color: #9b0a0a;
        }
      }
      .detail {
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
        margin-bottom: 1rem;
      }
      .price {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 25px;
        text-align: right;
        color: #000000;
      }
      .amount-wrapper {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 1;
        width: 100%;
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
    .chat {
      background-color: #393939;
      color: #ffcd61;
      width: 443px;
    }
    .reserve {
      background-color: #ffcd61;
      color: #393939;
      width: 443px;
    }
    .like {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #393939;
      color: #ffcd61;
      width: 225px;
      gap: 27px;
    }
  }
`;