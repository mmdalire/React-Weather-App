import React from "react";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import "./css/App.css";
import "./css/owfont-regular.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
