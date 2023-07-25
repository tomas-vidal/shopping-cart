import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom";
import GlobalStyle from "./globalStyles"
import styled from "styled-components"

const AppStyled = styled.main`
  background-color: #f5f4f9;
`

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </AppStyled>
  );
}

export default App;
