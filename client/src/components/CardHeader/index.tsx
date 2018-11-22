import * as React from "react";
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
    return <div className={`p-4`}> {this.props.children} </div>;
  }
}

export default Card;
