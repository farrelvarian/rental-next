/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { logo, mail, profile, user } from "../../../public/assets";
import { useRouter } from "next/router";
import styled from "styled-components";
import { breakpoints } from "../../../components/layouts";
import { useEffect } from "react";
import cookies from "next-cookies";
const axios = require("axios");

const navbarAfterLogin = (req,res) => {
  const user_image = cookies(req).user_image;
  const router = useRouter();
  const role = cookies(req).user_role;
let avatar
if (user_image === "j:null") {
  avatar=false;
}else{avatar=true}

  const gotoHome = () => {
    router.push(`/${role}/home`);
  };
  const gotoVehicleType = () => {
    router.push(`/${role}/vehicle-type`);
  };
  const gotoHistory = () => {
    router.push(`/${role}/history`);
  };
  const gotoAbout = () => {
    router.push(`/${role}/about`);
  };
  const gotoProfile = () => {
    router.push(`/${role}/profile`);
  };
  const gotoHelp = () => {
    router.push(`/${role}/help`);
  };
  const gotoLogout = () => {
   document.cookie = `user_isAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
   router.push(`/${role}/login`)
  };


  return (
    <NavbarAfterLogin>
      <Image className="logo" src={logo} alt="Logo" />
      <div className="list-wrapper">
        <li onClick={gotoHome}>Home</li>
        <li onClick={gotoVehicleType}>Vehicle Type</li>
        <li onClick={gotoHistory}>History</li>
        <li onClick={gotoAbout}>About</li>
      </div>
      <div className="profile-wrapper">
        <Image className="mail" src={mail} alt="Mail" />
        <div className="dropdown">
          <img src={avatar ? user_image : user.src} alt="Profile" />
          <div className="dropdown-content">
            <p onClick={gotoProfile}>Edit Profile</p>
            <div className="line" />
            <p onClick={gotoHelp}>Help</p>
            <div className="line" />
            <p onClick={gotoLogout}>Log out</p>
          </div>
        </div>
      </div>
    </NavbarAfterLogin>
  );
};

export default navbarAfterLogin;

const NavbarAfterLogin = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
  ${breakpoints.lessThan("sm")`
  margin-top:15px;
  margin-bottom:15px;
         flex-direction: column;
         gap:1rem;
        `}
  .logo {
    margin-left: 10%;
  }
  .list-wrapper {
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-left: 915px;
    margin-right: 183px;
    ${breakpoints.lessThan("2xl")`
         margin-left: 615px;
    margin-right: 103px;
        `}
    ${breakpoints.lessThan("xl")`
           margin-left: 415px;
    margin-right: 103px;
        `}
        ${breakpoints.lessThan("lg")`
         margin-left: 215px;
    margin-right: 103px;
        `}
        ${breakpoints.lessThan("md")`
          margin-left: 15px;
    margin-right: 15px;
        `} 
   
    li {
      list-style-type: none;
    }
  }
  .profile-wrapper {
    display: flex;
    width: 160px;
    justify-content: space-between;
    .mail {
      object-fit: contain;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        z-index: 1;
        .line {
          margin: 0;
          width: 100%;
          border: 1px solid #9f9f9f;
        }
      }
    }
    .dropdown:hover {
      .dropdown-content {
        display: block;
      }
    }
  }
`;
