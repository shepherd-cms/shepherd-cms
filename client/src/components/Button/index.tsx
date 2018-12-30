import * as React from "react";

import classNames from "classnames";
import "./styles.scss";

interface IProps {
  type: string;
  disabled: boolean;
  text: string;
  className: string;
  kind: string;
}

interface IState {}

class Card extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    const { className, kind } = this.props;

    let buttonType = "default";
    if (kind && kind == "primary") {
      buttonType = "primary";
    }

    return (
      <button
        className={classNames(
          "w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          buttonType
        )}
        disabled={this.props.disabled}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Card;
