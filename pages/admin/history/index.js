import Card from "../../../components/base/Card";
import Search from "../../../components/base/Search";
import Image from "next/image";
import { downBlack, imageVehicle } from "../../../public/assets";
import styled from "styled-components";
import { breakpoints } from "../../../components/layouts";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";

const historyPage = () => {
  return (
    <HistoryPage>
      <NavbarAfterLogin />
      <div className="content">
        <div className="main">
          <div className="search-section">
            <Search className="search-input" placeholder="Search history" />
            <div className="filter-wrapper">
              <select className="select-filter" placeholder="Filter">
                <option value="Type">Type</option>
                <option value="Date Added">Date Added</option>
                <option value="Name">Name</option>
                <option value="Favorite Product">Favorite Product</option>
              </select>
            </div>
          </div>
          <div className="days-section">
            <h4 className="heading-section">Today</h4>
            <h4 className="text-desc">
              Please finish your payment for vespa for Vespa Rental Jogja
            </h4>
            <div className="divider" />
            <h4 className="text-desc">Your payment has been confirmed!</h4>
            <div className="divider" />
          </div>
          <div className="days-section">
            <h4 className="heading-section">A week ago</h4>
            <div className="history-wrapper">
              <div className="history-item">
                <div className="image-wrapper">
                  <Image src={imageVehicle} alt="history" layout="fill" />
                </div>
                <div className="desc">
                  <h5 className="text-desc">Vespa Matic</h5>
                  <p className="text-detail">Jan 18 to 21 2021</p>
                  <p className="text-desc">Prepayment : Rp. 245.000</p>
                  <p className="text-detail green">Has been returned</p>
                </div>
                <div className="btn-delete-wrapper">
                  <button className="btn-delete">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h3 className="text-playfair">New Arrival</h3>
          <div className="content">
            <Card
              href={`/admin/vehicle/1`}
              image={imageVehicle.src}
              alt="vehicle 1"
              name="Lamborghini"
              location="Jakarta"
            ></Card>
            <Card
              href={`/admin/vehicle/2`}
              image={imageVehicle.src}
              alt="vehicle 2"
              name="White Jeep"
              location="Malang"
            ></Card>
          </div>
          <div className="view-more">
            <p>View more</p>
            <img src={downBlack.src} alt="view more" />
          </div>
        </div>
      </div>

      <Footer />
    </HistoryPage>
  );
};

export default historyPage;

export const HistoryPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 80%;
    padding-top: 50px;
    display: flex;
    position: relative;
    gap: 2rem;
    ${breakpoints.lessThan("lg")`
      flex-direction: column;
    `}
    .main {
      width: 90%;
      ${breakpoints.lessThan("lg")`
      width: 100%; 
    `}
      .search-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 50px;
        ${breakpoints.lessThan("sm")`
      flex-direction: column;
    `}
        .search-input {
          background: rgba(218, 218, 218, 0.27);
          border: 0.5px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 10px;
        }
        .filter-wrapper {
          select {
            background: rgba(218, 218, 218, 0.27);
            border: 0.5px solid #c4c4c4;
            box-sizing: border-box;
            border-radius: 10px;
            height: 80px;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;
            color: #b8becd;
            ${breakpoints.lessThan("sm")`
      width:100%
    `}
          }
        }
      }
      .days-section {
        .heading-section {
          margin-bottom: 48px;
          font-family: Nunito;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          color: #c4c4c4;
        }
        .text-desc {
          margin-bottom: 1rem;
          font-family: Nunito;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          margin: 0;
        }
        .text-detail {
          font-family: Nunito;
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          margin: 0;
        }
        .green {
          color: green;
        }
        .divider {
          border: 0.5px solid #c4c4c4;
          margin-bottom: 26px;
        }
        .history-wrapper {
          .history-item {
            display: flex;
            gap: 1rem;
            ${breakpoints.lessThan("sm")`
      flex-direction: column;
    `}
            .image-wrapper {
              position: relative;
              width: 197px;
              height: 165px;
              img {
                object-fit: cover;
                border-radius: 15px;
              }
            }
            .desc {
              display: flex;
              justify-content: center;
              flex-direction: column;
              p {
              }
            }
            .btn-delete-wrapper {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              ${breakpoints.lessThan("sm")`
      flex-direction: column;
    `}
              .btn-delete {
                width: 150px;
                height: 50px;
                background: #ffcd61;
                box-shadow: 0px 0px 20px rgba(251, 143, 29, 0.4);
                border-radius: 10px;
                border: unset;
                font-family: Nunito;
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
              }
            }
          }
        }
      }
    }
    .right-section {
      width: 250px;
      border: 1px solid #dadada;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 20px;
      box-sizing: content-box;
      ${breakpoints.lessThan("lg")`
      width: 100%; 
      box-sizing: border-box;
    `}
      .text-playfair {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        margin-bottom: 1rem;
      }
      .content {
        display: flex;
        flex-direction: column;
        ${breakpoints.lessThan("lg")`
        flex-direction: row; 
      `}
        ${breakpoints.lessThan("sm")`
        flex-direction: column; 
      `}
        gap: 1rem;
        .card {
          position: relative;
          height: 337px;
          ${breakpoints.lessThan("lg")`
          flex-direction: row; 
          width: 50%;
        `}
          filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
          ${breakpoints.lessThan("lg")`
          height: 250px;
        `}
          img {
            border-radius: 20px;
            object-fit: cover;
          }
          .description {
            position: absolute;
            bottom: 0;
            left: 0;
            background: #ffffff;
            border-radius: 0px 6px 0px 0px;
            width: 120px;
            box-sizing: content-box;
            padding-top: 1rem;
            padding-left: 10px;
          }
        }
      }
      .view-more {
        p {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 180%;
          color: #b8becd;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
