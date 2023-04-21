import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

interface IProps {
  onClick: () => void;
}

export const DealButton: React.FC<IProps> = ({ onClick }) => {
  return <Button onClick={onClick} text={"Deal"}></Button>;
};
