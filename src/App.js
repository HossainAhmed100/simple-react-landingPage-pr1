import React from "react";
import Analytics from "./components/Analytics/Analytics";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
