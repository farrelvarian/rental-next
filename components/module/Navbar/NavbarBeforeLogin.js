import Image from "next/image";
import {logo} from "../../../public/assets";
import styled from "styled-components";
import { breakpoints } from "../../../components/layouts";
import { useRouter } from "next/router";

const navbarBeforeLogin = (props) => {
   const router = useRouter();
   const role = props.role;

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
   const gotoLogin = () => {
     router.push(`/${role}/login`);
   };
   const gotoRegister = () => {
     router.push(`/${role}/signup`);
   };
  return (
    <NavbarBeforeLogin>
      <Image src={logo} alt="Logo" />
      <div className="list-wrapper">
        <li onClick={gotoHome}>Home</li>
        <li onClick={gotoVehicleType}>Vehicle Type</li>
        <li onClick={gotoHistory}>History</li>
        <li onClick={gotoAbout}>About</li>
      </div>
      <div className="profile-wrapper">
        <button className="login" value="Login" onClick={gotoLogin}>
          Login
        </button>
        <button className="register" value="Register" onClick={gotoRegister}>
          Register
        </button>
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
  ${breakpoints.lessThan("sm")`
  margin-top:15px;
  margin-bottom:15px;
         flex-direction: column;
         gap:1rem;
        `}

  .list-wrapper {
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-left: 915px;
    margin-right: 46px;
    ${breakpoints.lessThan("2xl")`
         margin-left: 615px;
    margin-right: 103px;
        `}
    ${breakpoints.lessThan("xl")`
           margin-left: 350px;
    margin-right: 100px;
        `}
        ${breakpoints.lessThan("lg")`
         margin-left: 150px;
    margin-right: 100px;
        `}
        ${breakpoints.lessThan("md")`
          margin-left: 10px;
    margin-right: 10px;
        `} 
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
