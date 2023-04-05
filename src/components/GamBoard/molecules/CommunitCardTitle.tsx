import styled from "styled-components";

export const CommunityCardTitle = () => {
  return (
    <TitleStyled>
      <div></div>
      <p> Community Cards</p>
      <div></div>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px 1fr;
  align-items: center;
  column-gap: 8px;
  width: 100%;

  > div {
    height: 4px;
    background-color: white;
  }
  > p {
    font-weight: 600;
    font-size: 24px;
    margin: auto;
  }
`;
