import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import {
  backBlack,
  imagePrev1,
  imagePrev2,
  imagePrev3,
} from "../../../public/assets";
import NavbarAfterLogin from "../../../components/module/Navbar/NavbarAfterLogin";
import Footer from "../../../components/module/Footer";
import { BASE_URL } from "../../../configs/configs";

const addVehicle = () => {
  const [vehicles, setVehicles] = useState({
    name: "",
    price: 0,
    description: "",
    category_id: 1,
    location_id: 1,
    stock: 0,
    status: "Available",
    image_id: "",
    image1: "",
    image2: "",
    image3: "",
    createdAt: new Date(),
  });
  const [images, setImages] = useState([]);
  const [imagesPreview] = [images.map((item) => URL.createObjectURL(item))];

  const handleForm = (e) => {
    setVehicles({ ...vehicles, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setImages([...e.target.files]);
    // setImagesPreview([...URL.createObjectURL(e.target.files)]);
  };

  const addVehicleByid = () => {
    const formData = new FormData();
    formData.append("name", vehicles.name);
    formData.append("price", vehicles.price);
    formData.append("description", vehicles.description);
    formData.append("category_id", vehicles.category_id);
    formData.append("location_id", vehicles.Location_id);
    formData.append("stock", vehicles.stock);
    formData.append("status", vehicles.status);
    formData.append("createdAt", vehicles.createdAt);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    axios
      .post(`http://localhost:4000/vehicles/`, formData)
      .then(() => {
        console.log("success add data");
        alert("data berhasil ditambahkan");
      })
      .catch(console.error());
  };
  return (
    <AddVehicle>
      <NavbarAfterLogin />
      <button type="button" className="back">
        <Image className="back-icon" src={backBlack} alt="back" />
        Add new item
      </button>
      <form onSubmit={() => handleSubmit} encType="multipart/form-data">
        <div className="content-container">
          <div className="left">
            <div className="image">
              <div className="main-image">
                <Image
                  src={imagesPreview[0] ? imagePrev1 : imagePrev1}
                  alt="imagePrev1"
                ></Image>
              </div>
              <div className="second-image second">
                <div className="second">
                  <Image
                    src={imagesPreview[1] ? imagePrev2 : imagePrev2}
                    alt="imagePrev2"
                  ></Image>
                </div>
                <div className="second">
                  <Image
                    src={imagesPreview[2] ? imagePrev3 : imagePrev3}
                    alt="imagePrev2"
                  ></Image>
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
            </div>
          </div>
          <div className="right">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name (max up to 50 words)"
              maxLength="50"
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Description (max up to 150 words)"
              maxLength="150"
              onChange={(e) => handleForm(e)}
            />
            <div className="line" />
            <div className="my-choice">
              <label htmlFor="price">Price:</label>
              <input
                className="price"
                id="price"
                name="price"
                onChange={(e) => handleForm(e)}
                placeholder="Type the price"
              />
            </div>
            <div className="status my-choice">
              <label htmlFor="status">Status: </label>
              <select className="status" id="status" name="status">
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
                  onChange={(e) => handleForm(e)}
                  type="number"
                ></input>
                {/* <Button className="btn-minus bg__gray">-</Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="choice-item">
          <button className="btn categories">Add to item to</button>
          <button type="submit" className="btn save" onClick={addVehicleByid}>
            Save Item
          </button>
        </div>
      </form>
      <Footer />
    </AddVehicle>
  );
};

export default addVehicle;

const AddVehicle = styled.div`
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
  }

  .content-container {
    display: flex;
    gap: 1.5rem;
    .left {
      .image {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .main-image {
          background: red;
          height: 25.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f6;
        }
        .second-image {
          display: flex;
          gap: 1.5rem;
          .second {
            height: 10.25rem;
            background: #f5f5f6;
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
      }
      .line {
        border: 1px solid #9f9f9f;
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
    }
    .save {
      width: 672px;
      background-color: #ffcd61;
      color: #393939;
    }
  }
`;


