import Image from "next/image";
import {logo,mail,profile} from "../../../public/assets";

import styled from "styled-components";

const navbarAfterLogin = () => {
  return (
    <NavbarAfterLogin>
      <Image src={logo} alt="Logo" />
      <div className="list-wrapper">
        <li>Home</li>
        <li>Vehicle Type</li>
        <li>History</li>
        <li>About</li>
      </div>
      <div className="profile-wrapper">
        <Image className="mail" src={mail} alt="Mail" />
        <Image src={profile} alt="Profile" />
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

  .list-wrapper {
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-left: 915px;
    margin-right: 183px;
    li {
      list-style-type: none;
    }
  }
  .profile-wrapper {
    display: flex;
    width: 160px;
    justify-content: space-between;
    .mail{object-fit:contain}
    }

`;