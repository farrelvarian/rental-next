import React, { useEffect, useState, useRouter } from "react";
import Search from "../../../components/base/Search";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import CardSection from "../../../components/module/SectionCard";
import styled from "styled-components";
import axios from "axios";
import Card from "../../../components/base/Card";
import { toastify } from "../../../components/layouts";
import { privateRouteMember } from "../../../configs/route/privateRouteMember";

const search = () => {
  const [vehicles, setVehicles] = useState([]);
  const [pagination, setPagination] = useState("");
  const [Number, setNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("field=createdAt&sort=DESC");
  const [Refresh, setRefresh] = useState(false);

  // const router = useRouter();
  // const { search } = router.query;
  let pageNumbers = [];

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}vehicles?npp=5&page=${Number}${sort}${search}`
      )
      .then((response) => {
        const { result } = response.data.data;
        const { pagination } = response.data.data;
        setVehicles(result);
        setPagination(pagination);
      })
      .catch(console.error());
  }, [Refresh]);

  // const [page, setPage] = useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  for (let i = 1; i <= pagination.totalPages; i++) {
    pageNumbers.push(i);
  }

  const btnPagination = (Number) => {
    setNumber(Number);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };

  const handleSearch = (e) => {
    setSearch(`&search=${e.target.value}`);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };
  return (
    <VehiclesType>
      <NavbarAfterLogin />
      <section className="container">
        <form className="search-wrapper">
          <Search placeholder="Search" onChange={(e) => handleSearch(e)} />
        </form>
      </section>
      <header className="container">
        <h1 className="heading-page">Search</h1>
        <p className="sub-heading">Click item to see details and reservation</p>
      </header>
      <select className="custom-select" onChange={(e) => handleSort(e)}>
        <option selected value={"field=createdAt&sort=DESC"}>
          Terbaru
        </option>
        <option value={"field=price&sort=ASC"}>Harga Terendah</option>
        <option value={"field=price&sort=DESC"}>Harga Tertinggi</option>
      </select>
      <CardSection >
        {vehicles?.map((item, index) => {
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
      <section className="container pagination-wrapper">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => btnPagination(number)}
                  className="page-link"
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        ;
      </section>
      <p className="no-content">There is no vehicle left</p>
      <Footer />
    </VehiclesType>
  );
};

export default search;

export const getServerSideProps = privateRouteMember(async (ctx) => {
  return {
    props: {},
  };
});

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
    display: flex;
    flex-direction: column;
    width: 80%;
    .heading-page {
      align-self: flex-start;
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
      align-self: center;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 50px;
      text-align: center;
      color: #b8becd;
    }
  }
  select {
    align-self: flex-end;
    margin-right: 10%;
    border: 0.8px solid #afb0b9;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px 46px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    &:focus {
      outline: none;
    }
    &:valid {
      color: #393939;
    }
    option {
      background-color: white;
      border: 0.8px solid #afb0b9;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 20px 46px;
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 33px;
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
    justify-content: center;
    nav {
      ul {
        display: flex;
        list-style-type: none;
        gap: 2rem;
        li {
          button {
            background-color: white;
            border: 0.8px solid #afb0b9;
            box-sizing: border-box;
            border-radius: 6px;
            padding: 5px 10px;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
          }
        }
      }
    }
  }
`;
