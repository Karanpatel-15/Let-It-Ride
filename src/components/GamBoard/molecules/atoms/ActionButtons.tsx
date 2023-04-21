import { Button } from "./Button";
import styled from "styled-components";

interface IProps {
  onLetItRideClick: () => void;
  onPullClick: () => void;
}

export const ActionButtons: React.FC<IProps> = ({
  onLetItRideClick,
  onPullClick,
}) => {
  return (
    <DivStyled>
      <Button onClick={onLetItRideClick} text="Let It Ride" />
      <Button onClick={onPullClick} text="Pull" />
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  justify-content: center;
`;
