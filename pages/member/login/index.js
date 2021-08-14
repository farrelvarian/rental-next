import Image from "next/image";
import Separator from "../../../public/image/Group 101.png";
import GoogleIcon from "../../../public/image/image 2.png";
import NavbarBeforeLogin from "../../../components/module/Navbar/NavbarBeforeLogin";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import styled from "styled-components";

const loginUser = () => {
  return (
    <LoginUser>
      <NavbarBeforeLogin />
      <NavbarAfterLogin />
      <div className="image-container">
        <div className="left">
          <h1>Let's Explore The World</h1>
          <h3>Don't have account?</h3>
          <button type="button" className="signup">
            Sign Up
          </button>
        </div>
        <Image className="separator" src={Separator} alt="Separator" />
        <div className="right">
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <a>Forgot Password?</a>
          <button type="button" className="login">
            Login
          </button>
          <button type="button" className="loginWithGoogle">
            <Image className="google-icon" src={GoogleIcon} alt="google" />
            Login with Google
          </button>
        </div>
      </div>
    </LoginUser>
  );
};

export default loginUser;

const LoginUser = styled.div`
  width: 100%;

  .image-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background: rgba(0, 0, 0, 0.4) url("/image/background.png");
    background-size: 100% auto;
    background-blend-mode: multiply;
    .left {
      h1 {
        width: 390px;
        margin-top: 107px;
        color: white;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 85px;
      }
      h3 {
        margin-top: 43px;
        color: white;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
      }
      button.signup {
        margin-top: 25px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        color: #ffcd61;
        width: 391px;
        height: 79px;
        background: #393939;
        box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
        border: unset;
        border-radius: 10px;
      }
    }
    .separator {
      margin-top: 94px !important;
    }
    .right {
      display: flex;
      flex-direction: column;
      input.email {
        margin-top: 176px;
        padding-left: 41px;
        color: white;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        width: 391px;
        height: 79px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
      }
      input.email::placeholder {
        color: white;
      }
      input.email:focus-visible {
        outline: unset;
      }
      input.password {
        margin-top: 34px;
        padding-left: 41px;
        color: white;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        width: 391px;
        height: 79px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
      }
      input.password::placeholder {
        color: white;
      }
      input.password:focus-visible {
        outline: unset;
      }
      a {
        margin-top: 14px;
        color: white;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
      }
      button.login {
        margin-top: 49px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        width: 391px;
        height: 79px;
        background: #ffcd61;
        box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
        border: unset;
        border-radius: 10px;
      }
      button.loginWithGoogle {
        margin-top: 34px;
        margin-bottom: 107px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        width: 391px;
        height: 79px;
        background: white;
        box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
        border: unset;
        border-radius: 10px;
        gap: 1rem;
      }
    }
  }
`;