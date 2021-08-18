import styled from "styled-components";
import Search from "../../../components/base/Search";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import CardSection from "../../../components/module/SectionCard";

const vehiclesType = (vehicles) => {
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
        anchor="vehicles-type/ppular-in-town"
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
  const res = await axios.get(`http://localhost:4000/vehicles?npp=5`);
  const vehicles = await res.data.data.result;
  return {
    props: { vehicles },
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