import styled from "styled-components"
import { PayoutMolecule } from "./molecules/Payout"
import { YourMoney } from "./molecules/YourMoney"


export const LeftColumn = () => {

    return (
        <DivStyled>
            <YourMoney />
            <PayoutMolecule />
        </DivStyled>
    )
}


const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

