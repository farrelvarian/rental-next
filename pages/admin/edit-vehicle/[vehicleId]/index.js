/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter, useRef } from "next/router";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import {
  backBlack,
  imagePrev1,
  imagePrev2,
  imagePrev3,
} from "../../../../public/assets";
import NavbarAfterLogin from "../../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../../components/module/Footer";
import { breakpoints } from "../../../components/layouts/breakpoints";
import cookies from "next-cookies";
import {privateRouteAdmin} from "../../../../configs/route/privateRouteAdmin";
import { useEffect } from "react";


const editVehicle = ({dataVehicle,token}) => {

  const { query } = useRouter();
  const id = Number(query.vehicleId);
  const router = useRouter();
  const [vehicles, setVehicles] = useState({
    name: dataVehicle.name,
    price: dataVehicle.price,
    description: dataVehicle.description,
    category_id: dataVehicle.category_id,
    location_id: dataVehicle.location_id,
    stock: dataVehicle.stock,
    status: dataVehicle.status,
    image_id: dataVehicle.image_id,
    image1: dataVehicle.image1,
    image2: dataVehicle.image2,
    image3: dataVehicle.image3,
    updatedAt: new Date(),
  });
  let imagesArray = [];
  const [images, setImages] = useState([]);
  if (images.length < 1) {
    imagesArray = [dataVehicle.image1, dataVehicle.image2, dataVehicle.image3];
  } else {
    [imagesArray] = [images.map((item) => URL.createObjectURL(item))];
  }

  const handleForm = (e) => {
    e.preventDefault();
    setVehicles({ ...vehicles, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    e.preventDefault();
    setImages([...e.target.files]);
    // setImagesPreview([...URL.createObjectURL(e.target.files)]);
  };

  const editVehicleByid = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", vehicles.name);
    formData.append("price", vehicles.price);
    formData.append("description", vehicles.description);
    formData.append("category_id", vehicles.category_id);
    formData.append("location_id", vehicles.location_id);
    formData.append("stock", vehicles.stock);
    formData.append("status", vehicles.status);
    formData.append("updatedAt", vehicles.updatedAt);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${id}`,formData,
        {
          withCredentials: true,
          headers: {
            Cookie: "token=" + token,
          },
        },
        
      )
      .then(() => {
        console.log("success edit data");
        alert("data berhasil diedit");
      })
      .catch(console.error());
  };
  const deleteVehicleByid = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${id}`,{
      withCredentials: true,
      headers: {
        Cookie: 'token='+token,
      },
    })
      .then(() => {
        alert("success delete");
        router.push("/admin/home");
      })
      .catch(console.error());
  };
  return (
    <EditVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back" onClick={() => router.back()}>
        <Image className="back-icon" src={backBlack} alt="back" />
        Edit item
      </button>
      <form onSubmit={() => handleSubmit} encType="multipart/form-data">
        <div className="content-container">
          <div className="left">
            <div className="image">
              <div className="main-image">
                <label className="label-image" htmlFor="image">
                  <img
                    src={imagesArray[0] ? imagesArray[0] : imagePrev1}
                    alt="imagePrev1"
                  />
                </label>
              </div>
              <div className="second-image second">
                <div className="second">
                  <label className="label-image" htmlFor="image">
                    <img
                      src={imagesArray[1] ? imagesArray[1] : imagePrev2}
                      alt="imagePrev2"
                    />
                  </label>
                </div>
                <div className="second">
                  <label className="label-image" htmlFor="image">
                    <img
                      src={imagesArray[2] ? imagesArray[2] : imagePrev3}
                      alt="imagePrev3"
                    />
                  </label>
                </div>
              </div>
              <input
                multiple
                id="image"
                type="file"
                name="image"
                onChange={(e) => onFileChange(e)}
                element="input"
                placeholder="url image product"
              />
            </div>
          </div>
          <div className="right">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name (max up to 50 words)"
              maxLength="50"
              value={vehicles.name}
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              value={vehicles.location_id}
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Description (max up to 150 words)"
              maxLength="150"
              value={vehicles.description}
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <div className="my-choice">
              <label htmlFor="price">Price:</label>
              <input
                className="price"
                id="price"
                name="price"
                value={vehicles.price}
                onChange={(e) => handleForm(e)}
                placeholder="Type the price"
              />
            </div>
            <div className="status my-choice">
              <label htmlFor="status">Status: </label>
              <select
                className="status"
                id="status"
                name="status"
                value={vehicles.status}
                onChange={(e) => handleForm(e)}
              >
                <option>Select status</option>
                <option value="Available">Available</option>
                <option value="Full Booked">Full Booked</option>
              </select>
            </div>
            <div className="stock-item">
              <label htmlFor="stock">Stock:</label>
              <div className="stock-vehicle">
                {/* <Button className="btn-plus bg__primary">+</Button> */}
                <input
                  name="stock"
                  value={vehicles.stock}
                  onChange={(e) => handleForm(e)}
                  type="number"
                ></input>
                {/* <Button className="btn-minus bg__gray">-</Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="choice-item">
          <select
            value={vehicles.category_id}
            onChange={(e) => handleForm(e)}
            className="btn categories"
            id="category_id"
            name="category_id"
          >
            <option value="" disabled hidden>
              Choose Category
            </option>
            <option name="category_id" value="2">
              Cars
            </option>
            <option name="category_id" value="1">
              Bike
            </option>
            <option name="category_id" value="3">
              Motorbike
            </option>
          </select>
          <button type="submit" className="btn save" onClick={editVehicleByid}>
            Save Change
          </button>
          <button className="btn delete" onClick={deleteVehicleByid}>
            Delete
          </button>
        </div>
      </form>
      <Footer />
    </EditVehicle>
  );
};

export default editVehicle;

export const getServerSideProps = privateRouteAdmin(async (ctx)=>{
  
  const token = await cookies(ctx).token;
  const { vehicleId } = ctx.params;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}vehicles/${vehicleId}`,
    {
      withCredentials: true,
      headers: {
        Cookie: 'token='+token,
      },
    }
  );
  const [dataVehicle] = await res.data.data;

  return {
    props: {dataVehicle,token},
  };
}
)

const EditVehicle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button.back {
    align-self: flex-start;
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 33px;
    color: black;
    width: 391px;
    height: 79px;
    background: transparent;
    border: unset;
    gap: 1rem;
    ${breakpoints.lessThan("xsm")`
          width: 100%
        `}
  }

  .content-container {
    display: flex;
    gap: 1.5rem;
    ${breakpoints.lessThan("lg")`
        gap: 0rem;
    `}
    ${breakpoints.lessThan("md")`
      margin-bottom: 50px;  
      flex-direction: column; 
    `}
    .left {
      .image {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .main-image {
          height: 25.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f6;
          .label-image {
            width: 616px;
            height: 412px;
            ${breakpoints.lessThan("2xl")`
      width: 516px; 
    `}
            ${breakpoints.lessThan("xl")`
      width: 416px; 
    `}
    ${breakpoints.lessThan("md")` 
      width: 100%; 
    `}
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
        }
        .second-image {
          display: flex;
          gap: 1.5rem;
          ${breakpoints.lessThan("sm")`
      display:none;
    `}
          .second {
            height: 10.25rem;
            background: #f5f5f6;
            .label-image {
              width: 290px;
              height: 164px;

              ${breakpoints.lessThan("2xl")`
              width: 150px; 
            `}
              ${breakpoints.lessThan("md")`
              width: 150px;
            `}
            ${breakpoints.lessThan("xsm")`
              display: none; 
            `}
              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }
            }
          }
          .second:nth-child(1) {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .second:nth-child(2) {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        input#image {
          display: none;
        }
      }
      button {
        padding: 1.35rem;
      }
    }
    .right {
      input {
        width: 600px;
        border: unset;
        background-color: transparent;
        padding: 8px 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 50px;
        color: #000000;
        &:focus {
          outline: none;
        }
        ${breakpoints.lessThan("xl")`
      width: 500px;
    `}
        ${breakpoints.lessThan("lg")`
      width: 400px;
    `}
    ${breakpoints.lessThan("md")`
      width: 300px;
    `}
      }
      .line {
        border: 1px solid #9f9f9f;
        ${breakpoints.lessThan("xl")`
      width: 500px;
    `}
        ${breakpoints.lessThan("lg")`
      width: 400px;
    `}
    ${breakpoints.lessThan("md")`
      width: 300px;
    `}
      }
      .my-choice {
        display: flex;
        flex-direction: column;
        label {
          margin-top: 20px;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 24px;
        }
        input.price {
          border: unset;
          background: #f5f5f6;
          border-radius: 10px;
          font-family: Nunito;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          line-height: 50px;
          color: #80918e;
        }
      }

      #status {
        padding: 1rem 0;
        width: 100%;
        border: unset;
        background: #f5f5f6;
        border-radius: 10px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        color: #80918e;
        ${breakpoints.lessThan("xl")`
      width: 500px;
    `}
        ${breakpoints.lessThan("lg")`
      width: 400px;
    `}
    ${breakpoints.lessThan("md")`
      width: 300px;
    `}
        &:focus {
          outline: none;
          box-shadow: 0 0 0 2pt #ffcd61;
        }
      }

      .input {
        padding: 1rem 0;
      }
      .text {
        border-radius: unset;
        border-bottom: 1px solid #000000;
      }
      flex: 1;
      .price {
      }
    }
    .stock-item {
      display: flex;
      justify-content: space-between;
      ${breakpoints.lessThan("md")`
      flex-direction: column; 
      gap: 1rem; 
    `}
      label {
        margin-top: 20px;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
      }
      .stock-vehicle {
        display: flex;
        input {
          width: unset;
          text-align: center;
        }
        .btn-plus,
        .btn-minus {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .choice-item {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 5rem;
    ${breakpoints.lessThan("md")`
      flex-direction: column; 
      gap: 1rem; 
    `}
    .btn {
      height: 89px;
      border-radius: 10px;
      border: unset;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 25px;
    }
    .categories {
      width: 433px;
      background-color: #393939;
      color: #ffcd61;
      ${breakpoints.lessThan("xl")`
  width: 333px;
    `}
      ${breakpoints.lessThan("lg")`
    width: 233px;
    `}
      ${breakpoints.lessThan("md")`
    width: 100%;
    `}
    }
    .save {
      width: 337px;
      background-color: #ffcd61;
      color: #393939;
      ${breakpoints.lessThan("xl")`
width: 237px;
    `}
      ${breakpoints.lessThan("lg")`
   width: 137px;
    `}
      ${breakpoints.lessThan("md")`
    width: 100%;
    `}
    }
    .delete {
      width: 296px;
      background-color: #393939;
      color: #ffcd61;
      ${breakpoints.lessThan("xl")`
 width: 196px;
    `}
      ${breakpoints.lessThan("lg")`
    width: 96px;
    `}
      ${breakpoints.lessThan("md")`
    width: 100%;
    `}
    }
  }
`;
