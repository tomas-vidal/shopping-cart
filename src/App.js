import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom";
import GlobalStyle from "./globalStyles"
import styled from "styled-components"
import Context from "./context/Context"

const AppStyled = styled.main`
  background-color: #f5f4f9;
  min-height: 100vh;
`

function App() {
  return (
    <AppStyled>
      <Context>
        <GlobalStyle />
        <Navbar />
        <Outlet />
      </Context>
    </AppStyled>
  );
}

export default App;
