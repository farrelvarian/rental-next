import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../base/Card"

const sectionCard = ({ heading,  anchor,children }) => {
  return (
    <SectionCard className="container">
     { heading && (
        <div className="heading-section">
          <h2>{heading}</h2>
          <Link href={`/${anchor}`}>
            <a className="anchor">Views all</a>
          </Link>
        </div>
      )}

      <div className="content">{children}</div>
    </SectionCard>
  );
};

sectionCard.propTypes = {
  heading: PropTypes.string,
  anchor: PropTypes.string,
  data: PropTypes.object,
};

sectionCard.defaultProps = {};
export default sectionCard;

export const SectionCard = styled.section`
  &.container {
    width: 1500px;
    margin: 0 auto;
  }

  padding-top: 82px;

  .heading-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
        h2 {
      margin: 0;
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      color: #000000;
    }
    a.anchor {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 60px;
      display: flex;
      align-items: center;
      color: #fb8f1d;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: 280px 280px 280px 280px 280px;
    justify-content: space-between;
    gap: 2rem;
  }
`;
