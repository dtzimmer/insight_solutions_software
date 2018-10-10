import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage";
import HeaderofPage from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderofPage />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
