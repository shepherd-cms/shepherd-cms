import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
// import { PasswordForgetLink } from "../PasswordForget";
import LoginForm from "../../components/LoginForm";

const Login = ({ history }: { [key: string]: any }) => (
  <div className="container mx-auto flex mt-8">
    <LoginForm history={history} />
    {/* <PasswordForgetLink /> */}
  </div>
);

export const LoginLink = () => (
  <p>
    Already have an account? <Link to={routes.LOGIN}>Login</Link>
  </p>
);

export const LoginPage = withRouter(Login);
