import styled from "styled-components";
import { search } from "../../../public/assets";
import Image from "next/image";

const searchInput = ({ onChange, value, placeholder, onClick }) => {
  return (
    <SearchInput>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <div className="btn-action">
        <Image src={search} onClick={onClick} />
      </div>
    </SearchInput>
  );
};

export default searchInput;

const SearchInput = styled.div`
  background-color: yellow;
  display: flex;
    width: 100%;
  position: relative;
  input {
    width: 100%;
    border: 0.8px solid #afb0b9;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px 46px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #b8becd;
    &:focus {
      outline: none;
    }
    &:valid {
      color: #393939;
    }
  }
  .btn-action {
    position: absolute;
    right: 10px;
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:hover {
      stroke: #ffcd61;
    }
  }
`;
