
import styled from "styled-components";


const payoutsLog = [
    {
        title: "Royal Flush",
        amount: 1000
    },
    {
        title: "Straight Flush",
        amount: 200
    },
    {
        title: "Four of a Kind",
        amount: 50
    },
    {
        title: "Full House",
        amount: 11
    },
    {
        title: "Flush",
        amount: 8
    },
    {
        title: "Straight",
        amount: 5
    },
    {
        title: "Three of a Kind",
        amount: 3
    },
    {
        title: "Two Pair",
        amount: 2
    },
    {
        title: "10's or better",
        amount: 1
    }
]


export const PayoutMolecule = () => {
    return (
        <DivStyled>
            <h3>Payout</h3>
            {
                payoutsLog.map((payouts, key)=>(
                    <PayoutStyled>
                        <p className="title">{payouts.title}</p>
                        <p>{payouts.amount}</p>
                    </PayoutStyled>
                ))
            }
        </DivStyled>
    )
}

const DivStyled = styled.div`
  padding: 16px;
  border-radius: 16px;
  row-gap: 8px;
  background: #818080;
  color: white;
  display: flex;
  flex-direction: column;
`;

const PayoutStyled = styled.div`
    display: flex;
    justify-content: space-between;
    .title{
        color: #f8e678;
    }
`



