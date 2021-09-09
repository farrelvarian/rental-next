/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import { user, edit } from "../../../public/assets";
import styled from "styled-components";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { breakpoints } from "../../../components/layouts";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../configs/redux/actions/userAction";
import cookies from "next-cookies";
import { privateRouteAdmin } from "../../../configs/route/privateRouteAdmin";


const profilePage = ({token,user_id}) => {
  const dispatch = useDispatch();
  const id = user_id;
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    image: "",
    role: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    status: "",
    createdAt: "",
    updateAt: new Date(),
  });
  const [imageUser, setImage] = useState("");
  let imagePreview = "";

  if (!imageUser) {
    imagePreview = users.image;
  } else {
    imagePreview = URL.createObjectURL(imageUser[0]);
  }
  
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}users/${id}`, {
          withCredentials: true,
          headers: {
            Cookie: "token=" + token,
          },
        })
      .then((response) => {
        const [result] = response.data.data;
        setUsers(result);
      })
      .catch(console.error());
  }, []);
  const handleForm = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setImage(e.target.files);
  };
  const updateUserByid = () => {
document.cookie = `user_image=${imagePreview}; path=/`;
    dispatch(updateUser(id, users, imageUser[0],token));
  };
  return (
    <Profile>
      <NavbarAfterLogin />
      <h1 className="heading-page">Profile</h1>
      <section className="profile-section">
        <div className="avatar-wrapper">
          <label className="label-image" htmlFor="avatar">
            <img src={imagePreview ? imagePreview : user.src} alt="avatar" />
          </label>
          <input
            type="file"
            className="btn btn-select-image"
            id="avatar"
            onChange={(e) => onFileChange(e)}
          />
          <div className="edit-avatar">
            <label className="label-image" htmlFor="avatar">
              <Image src={edit} alt="edit" layout="fill" />
            </label>
          </div>
        </div>
        <h2 className="text name">{users.name}</h2>
        <p className="text email">{users.email}</p>
        <p className="text phone">{users.phone}</p>
        <p className="text createdAt">
          Has been active since {users.createdAt}
        </p>
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
            value={users.email}
            onChange={(e) => handleForm(e)}
            placeholder="zulaikha17@gmail.com"
          />
          <div className="line" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address :</label>
          <input
            id="address"
            type="text"
            name="address"
            value={users.address}
            onChange={(e) => handleForm(e)}
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
            value={users.phone}
            onChange={(e) => handleForm(e)}
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
              id="name"
              name="name"
              value={users.name}
              onChange={(e) => handleForm(e)}
              placeholder="zulaikha"
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="born">DD/MM/YY</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              value={users.dateOfBirth}
              onChange={(e) => handleForm(e)}
              placeholder="03/09/2003"
            />
            <div className="line" />
          </div>
        </div>
        <div className="action-button">
          <button className="btn save" onClick={updateUserByid}>
            Save Change
          </button>
          <button className="btn edit">Edit Password</button>
          <button className="btn cancel">Cancel</button>
        </div>
      </form>
      <Footer />
    </Profile>
  );
};

export default profilePage;

export const getServerSideProps = privateRouteAdmin(async (ctx) => {
  const token = await cookies(ctx).token;
  const user_id = await cookies(ctx).user_id;
  return {
    props: { token, user_id },
  };
});

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      .btn.btn-select-image {
        display: none;
      }
      .label-image {
        img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
        }
      }
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
      justify-content: center;
      gap: 5rem;
      margin-top: 100px;
      ${breakpoints.lessThan("sm")`
            flex-direction:column;
            `}
      .btn {
        width: 400px;
        height: 89px;
        border-radius: 10px;
        border: unset;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        ${breakpoints.lessThan("xsm")`
            width: 200px;
            `}
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
