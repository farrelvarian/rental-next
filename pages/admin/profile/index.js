import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import {
  avatar,
  edit,
} from "../../../public/assets";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const profilePage = () => {
  const [value, setValue] = useState();

  return (
    <Profile>
      <NavbarAfterLogin />
      <h1 className="heading-page">Profile</h1>
      <section className="profile-section">
        <div className="avatar-wrapper">
          <Image src={avatar} alt="avatar" layout="fill" />
          <div className="edit-avatar">
            <Image src={edit} alt="edit" layout="fill" />
          </div>
        </div>
        <h2 className="text name">Samantha Doe</h2>
        <p className="text email">samanthadoe@mail.com</p>
        <p className="text phone">+62833467823</p>
        <p className="text createdAt">Has been active since 2013</p>
        <fieldset id="gender">
          <input type="radio" id="male" value="Male" />
          <label className="gender" for="male">
            Male
          </label>
          <input type="radio" id="female" value="Female" />
          <label className="gender" for="female">
            Female
          </label>
        </fieldset>
      </section>
      <form className="profile-update">
        <h4 className="heading-section-form">Contacts</h4>
        <div className="input-group">
          <label htmlFor="email">Email address:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="zulaikha17@gmail.com"
          />
          <div className="line" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Adress :</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
          />
          <div className="line" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Mobile number :</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="(+62)813456782"
          />
          <div className="line" />
        </div>
        <h4 className="heading-section-form">Identity</h4>
        <div className="input-group-two">
          <div className="input-group">
            <label htmlFor="username">Dsiplay name :</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="zulaikha"
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="born">DD/MM/YY</label>
            <input type="text" id="born" name="born" placeholder="03/09/2003" />
            <div className="line" />
          </div>
        </div>
        <div className="action-button">
          <button className="btn save">Save Change</button>
          <button className="btn edit">Edit Password</button>
          <button className="btn cancel">Cancel</button>
        </div>
      </form>
      <Footer />
    </Profile>
  );
};

export default profilePage;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  .heading-page {
    width: 80%;
    margin-top: 34px;
    align-self: flex-start;
    margin-left: 150px;
  }
  .profile-section {
    width: 80%;
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar-wrapper {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 2rem;
      .edit-avatar {
        width: 50px;
        height: 50px;
        background: #ffcd61;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    .text.name {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      color: black;
      margin-bottom: 30px;
    }
    .text {
      font-family: Nunito;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      color: #b8becd;
      margin: 0;
    }
    #gender {
      border: unset;
      gap: 2rem;
      margin-top: 50px;
      .gender {
        font-family: Nunito;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
  form.profile-update {
    width: 80%;
    .heading-section-form {
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 33px;
      color: #4f5665;
      margin: 30px 0;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 2rem;
      label {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #9f9f9f;
      }
      input {
        border: unset;
        background-color: transparent;
        padding: 8px 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 50px;
        color: #000000;
        &:focus {
          outline: none;
        }
      }
      .line {
        border: 1px solid #9f9f9f;
      }
    }
    .action-button {
      display: flex;
      justify-content:center;
      gap: 5rem;
      margin-top: 100px;
      .btn {
        height: 89px;
        border-radius: 10px;
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        width: 400px;
      }
      .save {
        background-color: #ffcd61;
        color: #393939;
      }
      .edit {
        background-color: #393939;
        color: #ffcd61;
      }
      .cancel {
        background: rgba(203, 203, 212, 0.27);
        color: #393939;
      }
    }
  }
`;