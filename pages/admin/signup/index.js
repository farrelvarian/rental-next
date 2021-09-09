/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import styled from "styled-components";
import {
  heroSignup,
  google,
  logo,
  twitter,
  facebook,
  instagram,
  linkedin,
  youtube,
} from "../../../public/assets";
import { breakpoints } from "../../../components/layouts";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../configs/redux/actions/userAction";
import Link from "next/link";
import { publicRoute } from "../../../configs/route/publicRoute";



const socialmedia = [twitter, facebook, instagram, linkedin, youtube];

const signupUser = () => {
    const [admin, setAdmin] = useState({
      name: "",
      email: "",
      password: "",
      role: "admin",
    });

    const dispatch = useDispatch();
    const router = useRouter();

    const handleForm = (e) => {
      setAdmin({ ...admin, [e.target.name]: e.target.value });
    };
    const registerAdminClick = () => {
      if (admin.name === "" || admin.email === "" || admin.password === "") {
        alert("all of field must be filled");
      } else {
        dispatch(registerUser(admin, router));
      }
    };
  return (
    <SignupUser>
      <div className="left">
        <div className="background-signup">
          <Image
            src={heroSignup}
            alt="signup"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="right">
        <div className="input-signup">
          <h1>Sign Up</h1>

          <input
            type="name"
            className="name"
            name="name"
            placeholder="Name"
            onChange={(e) => handleForm(e)}
          />
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleForm(e)}
          />
          <input
            type="password"
            className="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleForm(e)}
          />

          <button type="button" className="signup" onClick={registerAdminClick}>
            Sign Up
          </button>
          <div className="divider">
            <hr className="divider-line"></hr>
            <span className="text-24 span">or try another way</span>
            <hr className="divider-line"></hr>
          </div>
          <button type="button" className="signupWithGoogle">
            <Image className="google-icon" src={google} alt="google" />
            Sign Up with Google
          </button>
          <Link href="/admin/login">
            <button type="button" className="login">
              Login
            </button>
          </Link>
        </div>
        <div className="footer">
          <Image className="logo" src={logo} alt="logo" />
          <p className="indentity-text-detail">
            Plan and book your perfect trip with expert advice, travel tips for
            vehicle information from us
          </p>
          <p className="indentity-text-detail">
            ©2020 Vehicle Rental Center. All rights reserved
          </p>
          <hr></hr>
          <div className="social-media">
            {socialmedia &&
              socialmedia.map((item, index) => {
                return (
                  <Image src={item} alt="Social Media" key={index}></Image>
                );
              })}
          </div>
        </div>
      </div>
    </SignupUser>
  );
};

export default signupUser;

export const getServerSideProps = publicRoute(async (ctx) => {
  return {
    props: {},
  };
}); 

const SignupUser = styled.div`
  display: flex;
  ${breakpoints.lessThan("lg")`
          flex-direction:column;
        `}
  .left {
    flex: 1;
    /* width: 50%; */
    height: 100%;
    width: 100%;
    position: relative;
    .background-signup {
      width: 50vw !important;
      min-height: 100vw !important;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    /* width: 50%; */
    .input-signup {
      display: flex;
      flex-direction: column;
      margin-top: 95px;
      margin-left: 100px;
      width: 490px;

      ${breakpoints.lessThan("xl")`
          margin-left: 50px; 
          margin-top: 0px;
        `}
      ${breakpoints.lessThan("sm")`
         width: 290px;
        `}
      .divider {
        display: flex;
        flex-direction: row;
        margin: 2rem 0;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        .divider-line {
          flex: 1;
          border: 1px solid rgba(57, 57, 57, 0.5);
        }
        .span {
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          color: rgba(57, 57, 57, 0.5);
          text-align: center;
        }
      }
      h1 {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
      }
      input.name {
        margin-top: 71px;
        padding-left: 41px;

        font-family: Nunito;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        /* width: 490px; */
        height: 79px;
        background: rgba(218, 218, 218, 0.28);
        border: 0.5px solid rgba(78, 78, 78, 0.5);
        border-radius: 10px;
        ${breakpoints.lessThan("xl")`

          margin-top: 0px;
        `}
      }

      input.name:focus-visible {
        outline: unset;
      }
      input.email {
        margin-top: 33px;
        padding-left: 41px;

        font-family: Nunito;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        /* width: 490px; */
        height: 79px;
        background: rgba(218, 218, 218, 0.28);
        border: 0.5px solid rgba(78, 78, 78, 0.5);
        border-radius: 10px;
      }

      input.email:focus-visible {
        outline: unset;
      }
      input.password {
        margin-top: 33px;
        padding-left: 41px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        /* width: 490px; */
        height: 79px;
        background: rgba(218, 218, 218, 0.28);
        border: 0.5px solid rgba(78, 78, 78, 0.5);
        border-radius: 10px;
      }
      input.password:focus-visible {
        outline: unset;
      }
      button.signup {
        margin-top: 51px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        /* width: 490px; */
        height: 79px;
        background: #ffcd61;
        box-shadow: 0px 0px 20px rgba(248, 161, 112, 0.47);
        border: unset;
        border-radius: 10px;
      }
      button.signupWithGoogle {
        margin-top: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        /* width: 490px; */
        height: 79px;
        background: white;
        box-shadow: 0px 0px 20px rgba(78, 78, 78, 0.4);
        border: unset;
        border-radius: 10px;
        gap: 1rem;
      }
      button.login {
        margin-top: 33px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 33px;
        color: #ffcd61;
        /* width: 490px; */
        height: 79px;
        background: #393939;
        box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);
        border: unset;
        border-radius: 10px;
      }
    }
    .footer {
      margin-top: 120px;
      margin-left: 73px;
      width: 392px;

      ${breakpoints.lessThan("xl")`
          margin-left: 23px; 
          margin-top: 15px;
        `} 
        ${breakpoints.lessThan("sm")`
         width: 290px;
        `}
      .indentity-text-detail {
        margin-bottom: 54px;
        font-family: Mulish;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        color: #848484;
      }
      hr {
        margin-top: 3rem;
        margin-bottom: 2rem;
      }
      .social-media {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 250px;
      }
    }
  }
`;
