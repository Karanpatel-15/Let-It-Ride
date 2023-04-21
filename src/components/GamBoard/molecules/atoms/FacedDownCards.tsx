import React from "react";
import CardBack from "../../../../assets/cardBack.png";
import styled from "styled-components";
interface IProps {
  numberOfCards: number;
}

export const FacedDownCards: React.FC<IProps> = ({ numberOfCards }) => {
  return (
    <DivStyled>
      {Array(numberOfCards)
        .fill("")
        .map((card, index) => (
          <ImgStyled src={CardBack} key={index} />
        ))}
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  column-gap: 16px;
  margin-right: 16px;
`;
const ImgStyled = styled.img`
  max-height: 185px;
`;
