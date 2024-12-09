import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Themes from "./Components/Themes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
