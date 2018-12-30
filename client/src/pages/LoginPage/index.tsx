import * as React from "react";
import { withRouter } from "react-router-dom";
// import { PasswordForgetLink } from "../PasswordForget";
import LoginForm from "../../components/LoginForm";

const Login = ({ history }: { [key: string]: any }) => (
  <div className="container mx-auto flex mt-8">
    <LoginForm history={history} />
    {/* <PasswordForgetLink /> */}
  </div>
);

export const LoginPage = withRouter(Login);
