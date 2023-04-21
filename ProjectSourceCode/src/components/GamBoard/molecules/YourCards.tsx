import styled from "styled-components";
import { useRoundStore } from "../../../stores/RoundStore";
import { ActionButtons } from "./atoms/ActionButtons";
import { BetButton } from "./atoms/BetButton";
import { Cards } from "./atoms/Cards";
import { DealButton } from "./atoms/DealButton";
import { FacedDownCards } from "./atoms/FacedDownCards";

export const YourCards = () => {
  const {
    bet,
    setBet,
    isRoundInProgress,
    startRound,
    playerHand,
    pull,
    round,
    letItRide,
    history,
  } = useRoundStore();
  const handleInputChange = (e: string) => {
    setBet(Number(e));
  };
  return (
    <DivStyled>
      {isRoundInProgress ? (
        <Cards cards={[...playerHand].splice(0, 3)} />
      ) : (
        <FacedDownCards numberOfCards={3} />
      )}
      <DivLeftSectionStyled>
        <BetButtonDivStyled>
          <BetButton
            isDisabled={round > 0}
            value={`${bet}`}
            title="1"
            onChange={handleInputChange}
            isRoundStarted={isRoundInProgress}
            isHiddenInput={history[0] == "pull"}
          />
          <BetButton
            isDisabled={round > 1}
            title="2"
            onChange={handleInputChange}
            value={`${bet}`}
            isRoundStarted={isRoundInProgress}
            isHiddenInput={history[1] == "pull"}
          />
          <BetButton
            isDisabled={false}
            title="3"
            onChange={handleInputChange}
            value={`${bet}`}
            isRoundStarted={isRoundInProgress}
          />
        </BetButtonDivStyled>
        {!isRoundInProgress ? (
          <DealButton onClick={startRound} />
        ) : (
          <ActionButtons onPullClick={pull} onLetItRideClick={letItRide} />
        )}
      </DivLeftSectionStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const BetButtonDivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

const DivLeftSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
