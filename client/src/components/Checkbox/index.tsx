import * as React from "react";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {
  checked: boolean;
}

interface IState {}

class Card extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    checked: false
  };

  public state: IState = {};

  public render() {
    const { checked } = this.props;
    return (
      <div>
        <input type="checkbox" checked={checked} />
      </div>
    );
  }
}

export default Card;
