import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import SignUpForm from "./SignUpForm";

const SignUpComponent = (props: any) => (
  <SignUpForm history={props.history} {...props} />
);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);
