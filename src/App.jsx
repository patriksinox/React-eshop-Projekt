import Domov from "./stranky/Domov";
import Produkty from "./stranky/Produkty";
import Produkt from "./stranky/Produkt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigacia from "./komponenty/Navigacia";
import Footer from "./komponenty/Footer";
import Onas from "./stranky/Onas";
import Kontakt from "./stranky/Kontakt";
import Error from "./stranky/Error";
import NakupnyKosik from "./stranky/NakupnyKosik";
import Dokoncenie from "./stranky/Dokoncenie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigacia />
        <Routes>
          <Route path="/" element={<Domov />} />
          <Route path="produkty" element={<Produkty />} />
          <Route path="produkty/:id" element={<Produkt />} />
          <Route path="dokoncenie" element={<Dokoncenie />} />
          <Route path="onas" element={<Onas />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="nakupnykosik" element={<NakupnyKosik />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
