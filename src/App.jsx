import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import BreedPage from "./pages/BreedPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BIZ, waGeneral } from "./config/business.js";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="bar">
        Helping Delhi NCR Families Find Their Perfect Companion ·{" "}
        <a href={waGeneral()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
      </div>
      <Header />
      <ScrollManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds/:slug" element={<BreedPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <a className="btn wa float" href={waGeneral()} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${BIZ.name}`}>
        💬 WhatsApp
      </a>
    </>
  );
}
