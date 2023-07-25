import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom";
import GlobalStyle from "./globalStyles"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
