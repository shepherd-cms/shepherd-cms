import * as React from "react";
import { SignUpLink } from "../../pages/SignUp";
import Button from "../Button";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

export class LoginForm extends React.Component<InterfaceProps, InterfaceState> {
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
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...LoginForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(LoginForm.propKey("error", error));
      });

    event.preventDefault();
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
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
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
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "password")}
              type="password"
              placeholder="Password"
            />
          </div>

          <Button disabled={isInvalid} type="submit" text="Login" />

          {error && <p>{error.message}</p>}
        </form>
        <SignUpLink />
      </div>
    );
  }
}
