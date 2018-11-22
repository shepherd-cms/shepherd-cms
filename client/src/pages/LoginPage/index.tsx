import * as React from "react";
import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class LoginPage extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return <div>Not Implemented</div>;
  }
}

export default LoginPage;
