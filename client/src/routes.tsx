import * as React from "react";
import { Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class Routes extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="lg:flex-grow max-w-lg">
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
      </div>
    );
  }
}

export default Routes;
