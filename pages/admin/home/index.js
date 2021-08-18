import Link from "next/link";
import Image from "next/image";
import NavbarBeforeLogin from "../../../components/module/Navbar/NavbarBeforeLogin";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import HeroHomeBeforeLogin from "../../../components/module/HeroHome/HeroHomeBeforeLogin";
import HeroHomeAfterLogin from "../../../components/module/HeroHome/HeroHomeAfterLogin";
import Footer from "../../../components/module/Footer";
import styled from "styled-components";
import Card from "../../../components/base/Card";
import CardSection from "../../../components/module/SectionCard";
import { testimonial, star, circle, plusYellow,next,previous } from "../../../public/assets";
import axios from "axios";

const home = ( {vehicles} ) => {
  const isAuth = true;
  return (
    <HomeUser>
      {isAuth ? (
        <>
          <NavbarAfterLogin />
          <HeroHomeAfterLogin />
        </>
      ) : (
        <>
          <NavbarBeforeLogin />
          <HeroHomeBeforeLogin />
        </>
      )}
      <CardSection
        heading="Popular in Town"
        anchor="vehicles-type/popular-in-town"
      >
        {vehicles?.map((item, index) => {
          return (
            <Card
              href={`/admin/vehicle/${item.id}`}
              key={index}
              image={item.image1}
              alt={item.name}
              name={item.name}
              location={item.location}
            ></Card>
          );
        })}
      </CardSection>
      {isAuth ? (
        <>
          <button className="btn add">Add new item</button>
        </>
      ) : (
        <></>
      )}
      <section className="container testimonials-sections">
        <div className="heading-section">
          <h2>Testimonials</h2>
        </div>
        <div className="content">
          <div className="left">
            <div className="star-wrapper">
              <Image src={star} /> <Image src={star} /> <Image src={star} />{" "}
              <Image src={star} /> <Image src={star} />
            </div>
            <p className="text-regular">
              ”It was the right decision to rent vehicle here, I spent less
              money and enjoy the trip. It was an amazing experience to have a
              ride for wildlife trip!”
            </p>
            <div className="identity">
              <h5>Edward Newgate</h5>
              <p className="text-regular">Founder Circle</p>
            </div>
          </div>
          <div className="right">
            <div className="card-profile">
              <Image src={testimonial} alt="username" layout="fill" />
              <div className="btn-action">
                <Image className="btn" src={previous} />
                <Image className="btn" src={next} />
              </div>
              <div className="icon-illustration plus">
                <Image src={plusYellow} alt="icon" layout="fill" />
              </div>
              <div className="icon-illustration circle">
                <Image src={circle} alt="icon" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </HomeUser>
  );
};

export default home;

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:4000/vehicles?npp=5`);
  const vehicles = await res.data.data.result;
  return {
    props: { vehicles },
  };
}

const HomeUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn.add {margin-top:50px;
    height: 89px;
    border-radius: 10px;
    border: unset;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    background-color: #393939;
    color: #ffcd61;
    width: 80%;
  }
  section.testimonials-sections {
    .heading-section {
      h2 {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 50px;
        color: #000000;
      }
    }
    .content {
      display: flex;
      gap: 20rem;

      .left {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 480px;

        .star-wrapper {
          display: flex;
          gap: 1rem;
          margin-bottom: 30px;
        }
        .text-regular {
          font-family: Mulish;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 36px;
          color: #393939;
        }
        .identity {
          margin-top: 40px;
          h5 {
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            color: #000000;
            mix-blend-mode: normal;
          }
          .text-regular {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            color: rgba(57, 57, 57, 0.85);
            mix-blend-mode: normal;
          }
        }
      }
      .right {
        .card-profile {
          position: relative;
          width: 380px;
          height: 490px;
          filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));

          img {
            border-radius: 25px;
          }
          .icon-illustration {
            position: relative;
            width: 32px;
            height: 32px;
            position: absolute;
            &.plus {
              bottom: -10px;
              left: -10px;
            }
            &.circle {
              top: -10px;
              right: -10px;
            }
          }
          .btn-action {
            position: absolute;
            background-color: white;
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            border-radius: 16px 0px 0px 0px;
            padding: 16px 8px 8px 16px;
            width: max-content;
            height: max-content;
            bottom: 0;
            right: 0;
            .btn {
              &:hover {
                cursor: pointer;
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
`;
