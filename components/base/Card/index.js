import Image from "next/image";
import styled from "styled-components";
import cardImage from "../../../public/manny-moreno-tdVPKfC_rP8-unsplash 1.png"

const card = (image) => {
 
  return (
    <Card>
      <Image
        className="image-container"
        src={cardImage}
        layout="fill"
        objectFit="cover"
        alt="vehicle"
      />
      <div className="text-container">
        <p className="info vehicle">Teluk Bogam</p>
        <p className="info location">Kalimantan Utara</p>
      </div>
    </Card>
  );
};

export default card;
const Card = styled.footer`
  width: 261px;
  height: 337px;
  display: flex;
  border-radius: 8px;
  position: relative;
  .image-container {
    border-radius: 6px;
  }
  .text-container {
    padding: 0.7rem 0.7rem 0.2rem 1rem;
    position: absolute;
    bottom: 0;
    width: 55%;
    height: 56px;
    background-color: white;
    border-radius: 0px 6px 0px 0px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info.vehicle {
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      /* line-height: 25px; */
      margin: 0;
      color: #042521;
    }
    .info.location {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      margin: 0;
      /* line-height: 24px; */
      color: #80918e;
    }
  }
`;
