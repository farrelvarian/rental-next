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
const socialmedia = [twitter, facebook, instagram, linkedin, youtube];
const signupUser = () => {
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
          <input type="name" className="name" placeholder="Name" />
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button type="button" className="signup">
            Sign Up
          </button>
          <h3>------ or try another way ------</h3>
          <button type="button" className="signupWithGoogle">
            <Image className="google-icon" src={google} alt="google" />
            Sign Up with Google
          </button>
          <button type="button" className="login">
            Login
          </button>
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

const SignupUser = styled.div`
  display: flex;
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
    flex: 1;
    /* width: 50%; */
    .input-signup {
      display: flex;
      flex-direction: column;
      margin-top: 95px;
      margin-left: 100px;
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
        width: 490px;
        height: 79px;
        background: rgba(218, 218, 218, 0.28);
        border: 0.5px solid rgba(78, 78, 78, 0.5);
        border-radius: 10px;
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
        width: 490px;
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
        width: 490px;
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
        width: 490px;
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
        width: 490px;
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
        width: 490px;
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
