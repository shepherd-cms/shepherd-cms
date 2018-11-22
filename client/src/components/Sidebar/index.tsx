import * as React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class Sidebar extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <div className={Styles.root}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/connect">Connect Group Search</Link>
          </li>
          <li>
            <Link to="/teams">Volunteer Teams</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
