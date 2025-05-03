import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./Pages/Shop/Shop.jsx";
import Pages from "./Pages/Pages.jsx";
import Contact from "./Pages/Contact.jsx";
import CategoriPage from "./Pages/CategoriPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/categories/:categoryName" element={<CategoriPage />} />
        {/* You can add more pages here */}
      </Route>
    </Routes>
  </BrowserRouter>
);
