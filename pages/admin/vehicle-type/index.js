import styled from "styled-components";
import Search from "../../../components/base/Search";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import CardSection from "../../../components/module/SectionCard";
import Card from "../../../components/base/Card";
import axios from "axios";

const vehiclesType = ({ vehiclesPopular }) => {
  return (
    <VehiclesType>
      <NavbarAfterLogin />

      <section className="container">
        <form className="search-wrapper">
          <Search placeholder="Search" />
        </form>
      </section>
      <CardSection
        heading="Popular in Town"
        anchor="vehicles-type/popular-in-town"
      >
        {vehiclesPopular?.map((item, index) => {
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
      <CardSection heading="Bike" anchor="vehicles-type/Bike">
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
      <CardSection heading="Cars" anchor="vehicles-type/Cars">
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
      <CardSection heading="Motorbike" anchor="vehicles-type/Motorbike">
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
      <Footer />
    </VehiclesType>
  );
};

export default vehiclesType;

export async function getServerSideProps() {
  const resPopular = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}vehicles?npp=5`
  );
  const vehiclesPopular = await resPopular.data.data.result;
  return {
    props: { vehiclesPopular },
  };
}

export const VehiclesType = styled.div`
display:flex;
flex-direction: column;
align-items:center;
  section.container {
      width:80%;
    .search-wrapper {
      margin-top: 70px;
    }
  }

`;