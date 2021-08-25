import Image from "next/image";
import Footer from "../../../components/module/Footer";
import { backWhite } from "../../../public/assets";
import styled from "styled-components";
import { breakpoints } from "../../../components/layouts";
import { useRouter } from "next/router";
import { publicRoute } from "../../../configs/route/publicRoute";

const forgotPassword = () => {
  const router = useRouter()
  return (
    <ForgotPasswordUser>
      <div className="image-container">
        <button type="button" className="back" onClick={() => router.back()}>
          <Image className="back-icon" src={backWhite} alt="back" />
          Back
        </button>
        <div className="content-wrapper">
          <h1>Don’t worry, we got your back!</h1>
          <input
            type="email"
            className="email"
            placeholder="Enter your email address"
          />
          <button type="button" className="sendLink">
            Login
          </button>
          <h3>
            You will receive a link to reset your password. If you haven’t
            received any link, click <a href="#">Resend Link</a>
          </h3>
        </div>
      </div>
      <Footer />
    </ForgotPasswordUser>
  );
};

export default forgotPassword;

export const getServerSideProps = publicRoute(async (ctx) => {

  return {
    props: {},
  };
});

const ForgotPasswordUser = styled.div`
  width: 100%;
  .image-container {
    display: flex;
    flex-direction: column;

    width: 100%;
    background: rgba(0, 0, 0, 0.4)
      url("/assets/images/hero-forgot-password.svg");
    background-size: 100% auto;
    background-blend-mode: multiply;
    button.back {
      justify-self: flex-start;
      margin-top: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 33px;
      color: white;
      width: 391px;
      height: 79px;
      background: transparent;
      border: unset;
      gap: 1rem;
      ${breakpoints.lessThan("xsm")`
           width: 100%
        `}
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      h1 {
        color: white;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 85px;
      }
      input.email {
        margin-top: 83px;
        color: white;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        width: 447px;
        height: 79px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("xsm")`
          width: 300px;
        `}
      }
      input.email::placeholder {
        color: white;
      }
      input.email:focus-visible {
        outline: unset;
      }
      button.sendLink {
        margin-top: 31px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        width: 447px;
        height: 79px;
        background: #ffcd61;
        box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("xsm")`
          width: 300px;
        `}
      }
      h3 {
        width: 548px;
        margin-top: 54px;
        margin-bottom: 140px;
        color: white;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        ${breakpoints.lessThan("sm")`
          width: 348px;
        `}
        ${breakpoints.lessThan("xsm")`
          width: 300px;
        `}
      }
    }
  }
`;
