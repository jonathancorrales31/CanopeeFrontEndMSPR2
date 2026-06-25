import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/link";
import LegalMentions from "./pages/legal-mentions";
import CGU from "./pages/cgu";
import CGV from "./pages/cgv";



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cgv" element={<CGV />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
      

