import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"; // Assuming you have a Footer

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
