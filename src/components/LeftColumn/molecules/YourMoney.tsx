import styled from "styled-components";

export const YourMoney = () => {
  return (
    <DivStyled>
      <TitleStyled>Your Money</TitleStyled>
      <AmountStyled>$0.00</AmountStyled>
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
color: #818080;
`;
