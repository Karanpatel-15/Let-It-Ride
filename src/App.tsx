
import './App.css'
import { LeftColumn } from './components/LeftColumn/LeftColumn'
import styled from 'styled-components'
import { GameBoard } from './components/GamBoard/GameBoard'
function App() {

  return (
    <DivStyled className="App">
      <LeftColumn />
      <GameBoard/>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  padding: 16px;
  column-gap: 16px;
`


export default App
