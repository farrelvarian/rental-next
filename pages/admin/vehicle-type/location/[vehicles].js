/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRouter } from "next/router";
import Search from "../../../../components/base/Search";
import NavbarAfterLogin from "../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../components/module/Footer";
import CardSection from "../../../../components/module/SectionCard";
import styled from "styled-components";
import axios from "axios";
import Card from "../../../../components/base/Card";
import { privateRouteAdmin } from "../../../../configs/route/privateRouteAdmin";

const vehiclesType = ({location}) => {
  const router = useRouter();
  const {query} = useRouter();
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
        <h1 className="heading-page">{query.vehicles}</h1>
        <p className="sub-heading">Click item to see details and reservation</p>
      </header>
      <CardSection>
        {location?.map((item, index) => {
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
      <p className="no-content">There is no vehicle left</p>
      <Footer />
    </VehiclesType>
  );
};

export default vehiclesType;

// export const getServerSideProps = privateRouteAdmin(async (ctx) => {
//   return {
//     props: {},
//   };
// });

// export const getStaticPaths = async () => {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_BASE_URL}locations`
//     );
  
//   const dataLocation = data.data.map((item) => ({
//     params: { vehicles: item.location.toString() },
//   }));
//   // ket: data paths harus sperti dibawah
//   const paths = [
//     { params: { vehicles: "Jakarta" } },
//     { params: { vehicles: "Malang" } },
//     { params: { vehicles: "Kalimantan" } },
//   ];

//   return {
//     paths: paths,
//     fallback: true,
//   };
// }

export const getServerSideProps = async (context) => {
  const vehicles = context.params.vehicles;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}locations/${vehicles}`
  );
  return {
    props: {
      location: data.data,
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
