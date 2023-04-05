import styled from "styled-components"
import { CommunityCardTitle } from "./molecules/CommunitCardTitle"
import { CommunityCards } from "./molecules/CommunityCard"



export const GameBoard = () => {

    return (
        <DivStyled> 
            <CommunityCards />
            <CommunityCardTitle/>
        </DivStyled>
    )
}


const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    
`