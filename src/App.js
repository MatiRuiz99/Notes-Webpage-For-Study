import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { NavbarDefault } from "./components/Navbar/NavBar";
import { FooterWithLogo } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavbarDefault />
      <MainPage />
      <FooterWithLogo />
    </div>
  );
}

export default App;
