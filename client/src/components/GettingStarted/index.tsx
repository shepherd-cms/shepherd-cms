import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {
  contact: any;
}

interface IState {}

class GettingStarted extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    contact: null
  };

  public state: IState = {};

  public render() {
    const { contact } = this.props;
    if (!contact) return null;
    return (
      <div className="w-full">
        <div className="p-4">
          <div className="flex flex-wrap">
            <div className="flex-1 w-2/5 text-grey-darker text-center  px-4 py-2 m-2 flex items-center">
              <a href="/profile" className="flex items-center">
                <FontAwesomeIcon
                  icon={["fas", "user-circle"]}
                  size="3x"
                  color="#0b3e5f"
                />
                <span className="pl-2">
                  It looks like you haven't setup your profile yet.{" "}
                </span>
              </a>
            </div>
            <div className="flex-1 w-2/5 text-grey-darker text-center px-4 py-2 m-2 flex items-center">
              <a href="/profile" className="flex items-center">
                <FontAwesomeIcon
                  icon={["fas", "cogs"]}
                  size="3x"
                  color="#0b3e5f"
                />
                <span className="pl-2">
                  Have you connected to a connect group yet!?
                </span>
              </a>
            </div>
          </div>
          <div className="flex  flex-wrap">
            <div className="flex-1 w-2/5 text-grey-darker text-center px-4 py-2 m-2 flex items-center">
              <a href="/profile" className="flex items-center">
                <FontAwesomeIcon
                  icon={["fas", "user-circle"]}
                  size="3x"
                  color="#0b3e5f"
                />
                <span className="pl-2">
                  See all the great upcoming events here!
                </span>
              </a>
            </div>
            <div className="flex-1 w-2/5 text-grey-darker text-center px-4 py-2 m-2 flex items-center">
              <a href="/teams" className="flex items-center">
                <FontAwesomeIcon
                  icon={["fas", "hands-helping"]}
                  size="3x"
                  color="#0b3e5f"
                />
                <span className="pl-2">
                  Connect with Volunteer Teams on your campus
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const GettingStartedWithRouter = (props: any) => (
//   <GettingStarted history={props.history} {...props} />
// );

export default GettingStarted;
