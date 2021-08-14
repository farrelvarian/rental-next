import Image from "next/image";
import Logo from "../../../public/image/logo.png";
import styled from "styled-components";

const navbarBeforeLogin = () => {
  return (
    <NavbarBeforeLogin>
      <Image src={Logo} alt="Logo" />
      <div className="list-wrapper">
        <li>Home</li>
        <li>Vehicle Type</li>
        <li>History</li>
        <li>About</li>
      </div>
      <div className="profile-wrapper">
        <button  className="login" value="Login" >Login</button>
        <button  className="register" value="Register" >Register</button>
      </div>
    </NavbarBeforeLogin>
  );
};

export default navbarBeforeLogin;

const NavbarBeforeLogin = styled.div`
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
    margin-right: 46px;
    li {
      list-style-type: none;
    }
  }
  .profile-wrapper {
    display: flex;
    width: 300px;
    justify-content: space-between;
    button.login {
      width: 132px;
      height: 48px;
      background-color: white;
      border: 1px solid #ffcd61;
      border-radius: 8px;
    }
    button.register {
      width: 132px;
      height: 48px;
      background-color: #ffcd61;
      border: 1px;
      border-radius: 8px;
    }
  }
`;
