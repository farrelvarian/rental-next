import styled from "styled-components";
import Search from "../../../components/base/Search";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import CardSection from "../../../components/module/SectionCard";
import Card from "../../../components/base/Card";
import axios from "axios";
import { privateRouteMember } from "../../../configs/route/privateRouteMember";

const vehiclesType = ({ locations, categories}) => {

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
        anchor="member/vehicle-type/popular-in-town"
      >
        {locations?.map((item, index) => {
          return (
            <Card
              href={`/member/vehicle-type/location/${item.location}`}
              key={index}
              image={item.image_location}
              alt={item.location}
              name={item.location}
              location={item.location}
            ></Card>
          );
        })}
      </CardSection>
      {categories?.map((categories, index) => {
        return (
          <CardSection
            key={index}
            heading={categories.category}
            anchor={`member/vehicle-type/category/${categories.category}`}
          >
            {categories.vehicles.data.map((item, index) => {
              return (
                <Card
                  href={`/member/vehicle/${item.id}`}
                  key={index}
                  image={item.image1}
                  alt={item.name}
                  name={item.name}
                  location={item.location}
                ></Card>
              );
            })}
          </CardSection>
        );
      })}
      <Footer />
    </VehiclesType>
  );
};

export default vehiclesType;

export const getServerSideProps = privateRouteMember(async (ctx)=>{
  const resLocation = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}locations?limit=5`
  );
    const resCategory = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}categories`
    );

  const locations = await resLocation.data.data;
  const categories = await resCategory.data.data;
  await Promise.all(
    categories.map(async (category, index) => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}categories/${category.category}?limit=5`
      );
      const todo = await response

      categories[index].vehicles = todo.data;
   
    })
  );
  return {
    props: { locations,categories },
  };
})

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