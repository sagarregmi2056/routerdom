import { Route, Routes } from "react-router-dom";
import { Navbars } from "./Components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";

function App() {
  return (
    <>
      <Navbars />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
