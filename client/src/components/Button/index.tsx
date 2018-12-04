import * as React from "react";
import Styles from "./styles.module.scss";

interface IProps {
  type: string;
  disabled: boolean;
  text: string;
}

interface IState {}

class Card extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <button
        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={this.props.disabled}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Card;
