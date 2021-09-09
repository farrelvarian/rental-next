import styled from "styled-components";
import { breakpoints } from "../../layouts/breakpoints";

const heroHomeAfterLogin = () => {
  const location = [];
  const type = [];
  const payment = [];
  const date = [];
  return (
    <HeroHomeAfterLogin>
      <div className="home">
        <h1>Explore and Travel</h1>
        <h3>Vehicle Finder</h3>
        <div className="row first">
          <input
            type="text"
            className="vehicle"
            placeholder="Type the vehicle (ex. motorbike)"
          />
        </div>
        <div className="row last">
          <select id="payment" placeholder="Payment">
            <option value="" disabled selected>
              Payment
            </option>
            {payment.map((item) => {
              <option value={item}>{item} </option>;
            })}
          </select>
          <select id="date" placeholder="date">
            <option value="" disabled selected>
              Date
            </option>
            {date.map((item) => {
              <option value={item}>{item} </option>;
            })}
          </select>
        </div>
        <button type="button" className="search">
          Search
        </button>
      </div>
    </HeroHomeAfterLogin>
  );
};

export default heroHomeAfterLogin;

const HeroHomeAfterLogin = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.4) url("/assets/images/hero-home-after.svg");
  background-size: 100% auto;
  background-blend-mode: multiply;
  .home {
    padding-top: 70px;
    margin-left: 121px;
    ${breakpoints.lessThan("sm")`
  margin-left: 15px;`}
    h1 {
      width: 356px;
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 85px;
      ${breakpoints.lessThan("sm")`
       width: 256px; `}
    }
    h3 {
      margin-top: 74px;
      margin-bottom: 68px;
      color: white;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
    }
    .row {
      input {
        margin-right: 30px;
        padding-left: 31px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        width: 470px;
        height: 52px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("sm")`
        margin-right: 0px;
  margin-left: 0px;
  width: 300px;`}
      }
      select {
        margin-right: 30px;
        padding-left: 31px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        width: 220px;
        height: 52px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("sm")`
        margin-bottom:15px;
        margin-right: 0px;
  margin-left: 0px;
  width: 300px;`}
        option {
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 32px;
          width: 447px;
          height: 79px;
          background: rgba(255, 255, 255, 0.26);
          border: unset;
          border-radius: 10px;
        }
      }
    }
    .row.first {
      margin-bottom: 35px;
    }
    .row.last {
      margin-bottom: 51px;
    }
    button.search {
      margin-bottom: 124px;
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 17px;
      width: 180px;
      height: 52px;
      background: #ffcd61;
      box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
      border: unset;
      border-radius: 10px;
    }
  }
`;
