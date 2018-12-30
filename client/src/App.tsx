import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { authRef } from "./firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import ConnectGroupSearch from "./pages/ConnectGroupSearch";
import VolunteerTeams from "./pages/VolunteerTeams";
import SideBar from "./components/Sidebar";
import * as routes from "./constants/routes";

import styles from "./App.module.scss";
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
import NavBar from "./components/NavBar";

interface InterfaceProps {
  setAuthUser: (authUser: any) => void;
  auth: any;
}

interface InterfaceState {
  user: any;
}

class App extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: null // <-- add this line
    };
  }
  public componentDidMount() {
    authRef.onAuthStateChanged((user: any) => {
      if (user) {
        this.props.setAuthUser(user);
        this.setState({ user });
      }
    });
  }

  public logout() {
    authRef.signOut().then(() => {
      this.setState({
        user: null
      });
      this.props.setAuthUser(null);
      // TODO:: redirect to login
    });
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <div className="nav">
            <NavBar hasUser={user != null} />
          </div>
          <div className="container mx-auto flex mt-8">
            {user != null ? <SideBar onLogout={() => this.logout()} /> : null}
            {user == null && (
              <Redirect
                to={{
                  pathname: "/login"
                }}
              />
            )}
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
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthUser: (authUser: any) =>
      dispatch({ type: "auth::set", payload: authUser })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
