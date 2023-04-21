import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<IProps> = ({ onClick, text }) => {
  return (
    <DivDealButton onClick={onClick} role="button">
      {text}
    </DivDealButton>
  );
};

const DivDealButton = styled.div`
  background: #074F57;
  padding: 21px;
  color: #ffffff;
  border-radius: 15px;
  box-shadow: 3px 3px 0 0 #ffffff;
  font-size: 22px;
  white-space: normal;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
