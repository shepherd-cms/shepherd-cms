import * as React from "react";

import classNames from "classnames";
import css from "./styles.module.scss";

interface IProps {
  kind: string;
  message: string;
}

interface IState {}

class Alert extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return <div className={css.error}>{this.props.message}</div>;
  }
}

export default Alert;
