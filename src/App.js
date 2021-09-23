import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <PortfolioContainer/>
      <Footer/>
    </div>
  );
}