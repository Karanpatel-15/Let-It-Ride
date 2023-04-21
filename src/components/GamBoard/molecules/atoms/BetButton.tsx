import styled from "styled-components";

interface IProps {
  title: string;
  onChange: (value: string) => void;
  value: string;
  isDisabled: boolean;
  isRoundStarted: boolean;
  isHiddenInput?: boolean;
}

export const BetButton: React.FC<IProps> = ({
  title,
  onChange,
  value,
  isDisabled = false,
  isRoundStarted,
  isHiddenInput = false,
}) => {
  return (
    <DivStyled isDisabled={isDisabled}>
      <PTitleStyled>{title}</PTitleStyled>
      <DivInputStyled>
        <p>$</p>
        {!isHiddenInput && (
          <InputStyled
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={isDisabled || isRoundStarted}
          />
        )}
      </DivInputStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div<Pick<IProps, "isDisabled">>`
  display: flex;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  background-color: #074F57;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

const PTitleStyled = styled.h1`
  font-size: 52px;
  opacity: 0.85;
  line-height: 18px;
  font-size: 52px;
  color: #ffffff;
  margin-right: auto;
  margin-left: auto;
`;

const InputStyled = styled.input`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  font-weight: bolder;
  font-size: 18px;
`;

const DivInputStyled = styled.div`
  font-size: 24px;
  font-weight: bolder;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  > p {
    color: white;
  }
`;
