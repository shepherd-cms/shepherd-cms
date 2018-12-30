import * as React from "react";
import css from "./styles.module.scss";
import { ReactComponent as UserCircle } from "../../assets/icons/icon-user-circle.svg";

interface IProps {
  hasUser: boolean;
}

interface IState {}

class NavBar extends React.Component<IProps, IState> {
  render() {
    const { hasUser } = this.props;
    return (
      <nav className={css.nav}>
        <div>
          <div className={css.logo}> shep·herd </div>
          <div className={css.logo2}>
            verb: guide or direct in a particular direction
          </div>
        </div>
        {hasUser && (
          <div className={css.user}>
            <UserCircle />
            <div> User</div>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
