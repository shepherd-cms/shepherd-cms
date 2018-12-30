import * as React from "react";
import Button from "../../components/Button";
import {
  ContactBasic,
  createContactOnAuth,
  getContactById
} from "../../models/contacts";
import * as routes from "../../constants/routes";

import Alert from "../../components/Alert";
import { authRef, doCreateUser } from "../../firebase";
import { connect } from "react-redux";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  firstName?: string;
  lastName?: string;
  setProfile: (user: ContactBasic) => void;
}

interface InterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  firstName: string;
  lastName: string;
}

class SignUpForm extends React.Component<InterfaceProps, InterfaceState> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    firstName: "",
    lastName: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);
    console.log("this.props.history", this.props.history);
    this.state = { ...SignUpForm.INITIAL_STATE };
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(SignUpForm.propKey(columnType, (event.target as any).value));
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, firstName, lastName } = this.state;
    const { history } = this.props;

    authRef
      .createUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        // Create a user in your own accessible Firebase Database too
        doCreateUser(authUser.user.uid, firstName, lastName, email)
          .then(() => {
            createContactOnAuth(
              authUser.user.uid,
              email,
              firstName,
              lastName
            ).then(data => {
              getContactById(authUser.user.uid).then(data => {
                this.props.setProfile(data);
                this.setState(() => ({ ...SignUpForm.INITIAL_STATE }));
                history.push(routes.HOME);
              });
            });
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
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      lastName === "" ||
      firstName === "";

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
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              id="firstName"
              value={firstName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "firstName")}
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              id="lastName"
              value={lastName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => this.setStateWithEvent(event, "lastName")}
              type="text"
              placeholder="Last Name"
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
        </form>
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
      dispatch({ type: "user::set", payload: user })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
