import styled from "styled-components";
import Search from "../../../components/base/Search";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import CardSection from "../../../components/module/SectionCard";

const vehiclesType = () => {
  return (
    <VehiclesType>
        <NavbarAfterLogin/>
       
      <section className="container">
        <form className="search-wrapper">
          <Search placeholder="Search" />
        </form>
      </section>
      <CardSection
        heading="Popular in town"
        anchor="vehicles-type/pupular-in-town"
      />
      <CardSection heading="Cars" />
      <CardSection heading="Motorbike" />
      <CardSection heading="Bike" />
      <Footer/>
    </VehiclesType>
  );
};

export default vehiclesType;

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