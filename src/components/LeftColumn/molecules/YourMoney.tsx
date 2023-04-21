import styled from "styled-components";
import { useRoundStore } from "../../../stores/RoundStore";

export const YourMoney = () => {
  const { playerTotalMoney } = useRoundStore();
  return (
    <DivStyled>
      <TitleStyled>Your Money</TitleStyled>
      <AmountStyled>${playerTotalMoney}</AmountStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: #ffffff;
`;

const TitleStyled = styled.h3``;

const AmountStyled = styled.h3`
  font-size: 45px;
  color: #074F57;
`;
