import styled from "styled-components";
import CardBack from "../../../assets/cardBack.png";
export const CommunityCards = () => {
  return (
      <DivCardsStyled>
        <img src={CardBack} />
        <img src={CardBack} />
      </DivCardsStyled>
  );
};

const DivCardsStyled = styled.div`
  display: flex;
  column-gap: 16px;
`;



