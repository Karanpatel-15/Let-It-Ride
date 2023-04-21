import styled from "styled-components";
import CardBack from "../../../assets/cardBack.png";
import { useRoundStore } from "../../../stores/RoundStore";
import { Cards } from "./atoms/Cards";
import { FacedDownCards } from "./atoms/FacedDownCards";
export const CommunityCards = () => {
  const { playerHand, isRoundInProgress, round } = useRoundStore();
  const cards = [...playerHand].splice(3, 5).map((card, index) => {
    const numberOfHiddenCard = 2 - round;
    return {
      ...card,
      isFacedDown: index < numberOfHiddenCard,
    };
  });
  return (
    <DivCardsStyled>
      <div></div>
      <div>
        {isRoundInProgress ? (
          <Cards cards={cards} />
        ) : (
          <FacedDownCards numberOfCards={2} />
        )}
      </div>
      <div></div>
    </DivCardsStyled>
  );
};

const DivCardsStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 280px 1fr;
  align-items: center;
  > div {
    display: flex;
    column-gap: 16px;
  }
`;
