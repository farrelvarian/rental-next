/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { separator,google } from "../../../public/assets";
import Footer from "../../../components/module/Footer";
import styled from "styled-components";
import { breakpoints } from "../../../components/layouts";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../configs/redux/actions/userAction";
import { useState } from "react";
import { publicRoute } from "../../../configs/route/publicRoute";

const loginMember = () => {
   const [member, setMember] = useState({
     email: "",
     password: "",
   });
   const dispatch = useDispatch();
   const router = useRouter();

   const handleForm = (e) => {
     setMember({ ...member, [e.target.name]: e.target.value });
   };
   const loginAdminClick = () => {
     dispatch(loginUser(member, router));
   };
  return (
    <LoginUser>
      <div className="image-container">
        <div className="left">
          <h1>Let's Explore The World</h1>
          <h3>Don't have account?</h3>
          <Link href="/member/signup">
            <button type="button" className="signup">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="separator">
          <Image src={separator} alt="Separator" />
        </div>

        <div className="right">
          <input
            type="email"
            className="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleForm(e)}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleForm(e)}
          />
          <a href="/member/forgot-password">Forgot Password?</a>
          <button type="button" className="login" onClick={loginAdminClick}>
            Login
          </button>
          <button type="button" className="loginWithGoogle">
            <Image className="google-icon" src={google} alt="google" />
            Login with Google
          </button>
        </div>
      </div>
      <Footer />
    </LoginUser>
  );
};

export default loginMember;

export const getServerSideProps = publicRoute(async (ctx) => {
  return {
    props: {},
  };
});

const LoginUser = styled.div`
  width: 100%;

  .image-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background: rgba(0, 0, 0, 0.4) url("/assets/images/hero-login.svg");
    background-size: 100% auto;
    background-blend-mode: multiply;
    ${breakpoints.lessThan("sm")`
            flex-direction:column;
        `}
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
        ${breakpoints.lessThan("lg")`
            width: 290px;
        `}
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
        ${breakpoints.lessThan("lg")`
            width: 291px;
        `}
      }
    }
    .separator {
      margin-top: 107px;
      object-fit: contain;
      ${breakpoints.lessThan("sm")`
            display:none;
        `}
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
        width: 447px;
        height: 79px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("lg")`
            width: 347px;
        `}
        ${breakpoints.lessThan("sm")`
            width: 291px;
        `}
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
        width: 447px;
        height: 79px;
        background: rgba(255, 255, 255, 0.26);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("lg")`
            width: 347px;
        `}
        ${breakpoints.lessThan("sm")`
            width: 291px;
        `}
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
        width: 447px;
        height: 79px;
        background: #ffcd61;
        box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
        border: unset;
        border-radius: 10px;
        ${breakpoints.lessThan("lg")`
            width: 347px;
        `}
        ${breakpoints.lessThan("sm")`
            width: 291px;
        `}
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
        width: 447px;
        height: 79px;
        background: white;
        box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
        border: unset;
        border-radius: 10px;
        gap: 1rem;
        ${breakpoints.lessThan("lg")`
            width: 347px;
        `}
        ${breakpoints.lessThan("sm")`
            width: 291px;
        `}
      }
    }
  }
`;