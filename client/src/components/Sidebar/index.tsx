import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";
import Card from "../Card";

interface IProps {
  history?: any;
}

interface IState {}

class Sidebar extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  handleLogout() {
    auth.doSignOut();
    this.props.history.push("/");
  }

  public render() {
    return (
      <div className={Styles.root}>
        <Card className={Styles.sideBar}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <NavLink to="/home" activeClassName={Styles.active}>
                <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
                <span className="ml-1">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" activeClassName={Styles.active}>
                <FontAwesomeIcon icon={["fas", "user"]} size="1x" />
                <span className="ml-1">Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect" activeClassName={Styles.active}>
                <FontAwesomeIcon icon={["fas", "cogs"]} size="1x" />
                <span className="ml-1">Connect Groups</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" activeClassName={Styles.active}>
                <FontAwesomeIcon icon={["fas", "hands-helping"]} size="1x" />
                <span className="ml-1">Volunteer Teams</span>
              </NavLink>
            </li>
            <li>
              <button onClick={() => this.handleLogout()}>Log Out</button>
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}
const SidebarWithRouter = (props: any) => (
  <Sidebar history={props.history} {...props} />
);
export default withRouter(SidebarWithRouter);
