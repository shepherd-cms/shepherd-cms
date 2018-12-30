import * as React from "react";
import classNames from "classnames";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {
  className: string;
}

interface IState {}

class Card extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    className: ""
  };

  public state: IState = {};

  public render() {
    return (
      <div
        className={classNames(
          "shadow-lg mb-4 rounded-lg",
          Styles.root,
          this.props.className
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
