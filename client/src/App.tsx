import React, { Component } from "react";
import LoginPage from "./pages/LoginPage";
import SideBar from "./components/Sidebar";
import Routes from "./routes";
import styles from "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import "./static/css/tailwind.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container mx-auto flex">
          <SideBar />

          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
