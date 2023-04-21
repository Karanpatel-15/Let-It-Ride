import React from "react";
import CardBack from "../../../../assets/cardBack.png";
import styled from "styled-components";
import { ICard } from "../../../../stores/RoundStore";
import { CardImageMapping } from "../../../../assets/CardMapping";
interface IProps {
  cards: ICard[];
}

export const Cards: React.FC<IProps> = ({ cards }) => {
  return (
    <DivStyled>
      {cards.map((card, index) =>
        card.isFacedDown ? (
          <ImgStyled src={CardBack} key={index} />
        ) : (
          <ImgStyled src={CardImageMapping[card.shortValue]} key={index} />
        )
      )}
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
