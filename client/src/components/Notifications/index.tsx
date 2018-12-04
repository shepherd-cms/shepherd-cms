import * as React from "react";
import Checkbox from "../Checkbox";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class Notifications extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <div className="w-full p-6">
        <div className="flex justify-between pb-2">
          <span>Notify Me of upcoming events </span>
          <Checkbox checked={true} />
        </div>
        <div className="flex justify-between pb-2">
          <span>Notify Me of upcoming events </span>
          <Checkbox checked={false} />
        </div>
        <div className="flex justify-between pb-2">
          <span>Notify Me of upcoming events </span>
          <Checkbox checked={false} />
        </div>
        <div className="flex justify-between pb-2">
          <span>Notify Me of upcoming events </span>
          <Checkbox checked={true} />
        </div>
      </div>
    );
  }
}

export default Notifications;
