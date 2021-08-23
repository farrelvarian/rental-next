import Image from "next/image";
import styled from "styled-components";
import {brakpoints} from "../../layouts"

import {
    logo,
  twitter,
  facebook,
  instagram,
  linkedin,
  youtube,
} from "../../../public/assets";
import { breakpoints } from "../../layouts";
function Footer() {

  const destinations = [
    "Bali",
    "Yogyakarta",
    "Jakarta",
    "Kalimantan",
    "Malang",
  ];
  const vehicle = ["Bike", "Cars", "Motorbike", "Return Times", "FAQs"];
  const interests = [
    "Adventure Travel",
    "Art And Culture",
    "Wildlife And Nature",
    "Family Holidays",
    "Culinary Trip",
  ];
  const socialmedia = [twitter, facebook, instagram, linkedin, youtube];

  return (
    <FooterComponent>
      <div className="wrapper">
        <div className="identity">
          <Image src={logo} alt="logo" />
          <div className="indentity-text">
            <p className="indentity-text-detail">
              Plan and book your perfect trip with expert advice, travel tips
              for vehicle information from us
            </p>
            <p className="indentity-text-detail">
              ©2020 Vehicle Rental Center. All rights reserved
            </p>
          </div>
        </div>
        <div className="destinations">
          <h3 className="destinations-text-bold">Destinations</h3>
          {destinations.map((item, index) => {
            return (
              <p key={index} className="destinations-text">
                {item}
              </p>
            );
          })}
        </div>
        <div className="vehicle">
          <h3 className="vehicle-text-bold">Vehicle</h3>
          {vehicle.map((item, index) => {
            return (
              <p key={index} className="vehicle-text">
                {item}
              </p>
            );
          })}
        </div>
        <div className="interests">
          <h3 className="interests-text-bold">Interests</h3>
          {interests &&
            interests.map((item, index) => {
              return (
                <p key={index} className="interests-text">
                  {item}
                </p>
              );
            })}
        </div>
      </div>
      <hr></hr>
      <div className="social-media">
        {socialmedia &&
          socialmedia.map((item, index) => {
            return <Image src={item} alt="Social Media" key={index}></Image>;
          })}
      </div>
    </FooterComponent>
  );
}

export default Footer;

const FooterComponent = styled.footer`
  width: 100%;
  padding: 5rem;
  ${breakpoints.lessThan("sm")`
  padding: 1rem;`}
  hr {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;  
     ${breakpoints.lessThan('md')`
  flex-direction: column;`}
    .identity {
      max-width: 391px;
      .indentity-text {
        margin-top: 1rem;
        p {
          font-family: Mulish;
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          color: #848484;
        }
      }
    }
    .destinations {
      h3 {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 60px;
      }
      p {
        font-family: Mulish;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;

        color: #848484;
      }
    }
    .vehicle {
      h3 {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 60px;
      }
      p {
        font-family: Mulish;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;

        color: #848484;
      }
    }
    .interests {
      h3 {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 60px;
      }
      p {
        font-family: Mulish;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;

        color: #848484;
      }
    }
  }
  .social-media {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 250px;
  }
`;
