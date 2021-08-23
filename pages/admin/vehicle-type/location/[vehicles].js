import React, { useEffect,useState,useRouter } from "react";
import Search from "../../../../components/base/Search";
import NavbarAfterLogin from "../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../components/module/Footer";
import CardSection from "../../../../components/module/SectionCard";
import styled from "styled-components";
import axios from "axios";

const vehiclesType = () => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>halaman loading</h1>;
  }
  return (
    <VehiclesType>
      <NavbarAfterLogin />
      <section className="container">
        <form className="search-wrapper">
          <Search placeholder="Search" />
        </form>
      </section>
      <header className="container">
        <h1 className="heading-page">Popular in Town</h1>
        <p className="sub-heading">Click item to see details and reservation</p>
      </header>
      <CardSection>
        {/* {locations?.map((item, index) => {
          return (
            <Card
              href={`/admin/vehicle/${item.location}`}
              key={index}
              image={item.image_location}
              alt={item.location}
              name={item.location}
              location={item.location}
            ></Card>
          );
        })} */}
      </CardSection>
      <p className="no-content">There is no vehicle left</p>
      <Footer />
    </VehiclesType>
  );
};

export default vehiclesType;

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}locations`
    );
    // console.log(data);
  const dataLocation = data.data.map((item) => ({
    params: { vehicles: item.location.toString() },
  }));
  // ket: data paths harus sperti dibawah
  const paths = [dataLocation];
  console.log(paths.params);
  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const vehicles = context.params.vehicles;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}locations/${vehicles}`
  );
  return {
    props: {
      user: data,
    },
  };
};

export const VehiclesType = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  section.container {
    width: 80%;
    .search-wrapper {
      margin-top: 70px;
    }
  }
  header.container {
    .heading-page {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 50px;
      color: #000000;
      mix-blend-mode: normal;
      margin-bottom: 22px;
    }
    .sub-heading {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 50px;
      text-align: center;
      color: #b8becd;
    }
  }
  .no-content {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #b8becd;
    text-align: center;
    margin-top: 50px;
  }

  .pagination-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
  }
`;
