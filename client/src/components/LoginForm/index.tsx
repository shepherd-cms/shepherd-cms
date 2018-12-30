import * as React from "react";
import { SignUpLink } from "../../pages/SignUp";

import * as routes from "../../constants/routes";
import { authRef } from "../../firebase";
import { connect } from "react-redux";
import {
  ContactBasic,
  createContactOnAuth,
  getContactById
} from "../../models/contacts";
import Button from "../Button";
import Alert from "../Alert";

import css from "./styles.module.scss";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
  setProfile: (user: ContactBasic) => void;
  setAuthUser: (user: any) => void;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

class LoginForm extends React.Component<InterfaceProps, InterfaceState> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);
    this.state = { ...LoginForm.INITIAL_STATE };
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(LoginForm.propKey(columnType, (event.target as any).value));
  }

  public onSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history, setProfile, setAuthUser } = this.props;
    authRef
      .signInWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        getContactById(authUser.user.uid).then(user => {
          console.log("userId", authUser);
          setAuthUser(authUser);
          setProfile(user);
        });
        this.setState(() => ({ ...LoginForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(LoginForm.propKey("error", error));
      });
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="w-full max-w-xs m-auto pt-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={event => this.onSubmit(event)}
        >
          <div className="mb-4">
            {error && <Alert message={error.message} />}
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              id="username"
              value={email}
              onChange={event => this.setStateWithEvent(event, "email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "password")}
              type="password"
              placeholder="Password"
            />
          </div>

          <Button
            disabled={isInvalid}
            type="submit"
            text="Login"
            className={css.button}
          />
        </form>
        <SignUpLink />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setProfile: (user: ContactBasic) =>
      dispatch({ type: "user::set", payload: user }),
    setAuthUser: (user: any) => dispatch({ type: "auth::set", payload: user })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
