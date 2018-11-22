import * as React from "react";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class Card extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <div className="shadow-lg rounded-sm pb-1"> {this.props.children} </div>
    );
  }
}

export default Card;
