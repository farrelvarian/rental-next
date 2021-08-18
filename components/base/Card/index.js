
import styled from "styled-components";
import Link from "next/link";


const card = (props) => {
 
  return (
    <Link href={props.href}>
      <Card>
        <img className="image-container" src={props.image} alt={props.name} />
        <div className="text-container">
          <p className="info vehicle">{props.name}</p>
          <p className="info location">{props.location}</p>
        </div>
      </Card>
    </Link>
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
  img {
    width: 261px;
    height: 337px;
    object-fit:cover;
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
