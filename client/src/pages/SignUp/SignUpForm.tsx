import * as React from "react";
import Button from "../../components/Button";
import * as routes from "../../constants/routes";
import { auth, db } from "../../firebase";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export class SignUpForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);
    this.state = { ...SignUpForm.INITIAL_STATE };
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(SignUpForm.propKey(columnType, (event.target as any).value));
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...SignUpForm.INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(SignUpForm.propKey("error", error));
          });
      })
      .catch(error => {
        this.setState(SignUpForm.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

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
              value={username}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "username")}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "email")}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="passwordOne"
            >
              Password
            </label>
            <input
              id="passwordOne"
              value={passwordOne}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "passwordOne")}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="passwordOne"
            >
              Confirm Password
            </label>
            <input
              value={passwordTwo}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "passwordTwo")}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button disabled={isInvalid} type="submit" text="Sign Up" />
          </div>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
