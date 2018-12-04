import React, { Component } from "react";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import ConnectGroupSearch from "./pages/ConnectGroupSearch";
import VolunteerTeams from "./pages/VolunteerTeams";
import SideBar from "./components/Sidebar";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import * as routes from "./constants/routes";
import styles from "./App.module.scss";
import { firebase } from "./firebase";
import { withAuthentication } from "./firebase/withAuthentication";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faCogs,
  faHome,
  faHandsHelping,
  faUser,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faHome,
  faCogs,
  faHandsHelping,
  faUser,
  faUserCircle
);

import { BrowserRouter as Router } from "react-router-dom";
import "./static/css/tailwind.min.css";

interface InterfaceProps {}

interface InterfaceState {
  authUser?: any;
}

class App extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    const { authUser } = this.state;
    return (
      <Router>
        <div className="container mx-auto flex mt-8">
          {authUser ? <SideBar /> : null}
          <Switch>
            <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
            <Route exact={true} path="/" component={LoginPage} />
            <Route exact={true} path={routes.LOGIN} component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/connect" component={ConnectGroupSearch} />
            <Route exact path="/teams" component={VolunteerTeams} />
            <Route exact path="/user" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// removed withAuthorization
export default App;
