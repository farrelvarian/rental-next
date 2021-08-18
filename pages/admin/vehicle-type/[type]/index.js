import React, { useEffect,useState,useRouter } from "react";
import Search from "../../../../components/base/Search";
import NavbarAfterLogin from "../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../components/module/Footer";
import CardSection from "../../../../components/module/SectionCard";
import styled from "styled-components";


const vehiclesType = () => {
  const [pagination, setPagination] = useState("");
  const [Number, setNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [Refresh, setRefresh] = useState(false);

//   const router = useRouter();
//   const { type } = router.query;
  let pageNumbers = [];

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}vehicles?npp=5&page=${Number}${search}`)
//       .then((response) => {
//         const { result } = response.data.data;
//         const { pagination } = response.data.data;
//         setProducts(result);
//         setPagination(pagination);
//       })
//       .catch(console.error());
//   }, [Refresh]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  for (let i = 1; i <= pagination.totalPages; i++) {
    pageNumbers.push(i);
  }

  const btnPagination = (Number) => {
    setNumber(Number);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };

//   const handleForm = (e) => {
//     setSearch(`&search=${e.target.value}`);
//     Refresh === true ? setRefresh(false) : setRefresh(true);
//   };

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
      <CardSection
        heading="Popular in town"
        anchor="vehicles-type/pupular-in-town"
      />
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

export default vehiclesType;

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
