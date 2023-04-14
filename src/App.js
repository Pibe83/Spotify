import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SidebarVertical from "./components/LeftSidebar";
import NavBarTop from "./components/NavBarTop";
import NavBarFlexBottom from "./components/NavBarFlexBottom";
import HomeFetch from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";

const App = () => (
  <>
    <SidebarVertical />
    <Container>
      <BrowserRouter>
        <NavBarTop /> 
        <Routes>
          <Route path="/" element={<HomeFetch />} />
          <Route path="/album/:id" element={<AlbumPage />} />
        </Routes>
        <NavBarFlexBottom />
      </BrowserRouter>
    </Container>
  </>
);

export default App;
