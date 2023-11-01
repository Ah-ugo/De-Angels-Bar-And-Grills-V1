import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Menu from "./Pages/Menu";
import Bookings from "./Pages/Bookings";
import Steps2 from "./Components/Steps2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Steps2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
