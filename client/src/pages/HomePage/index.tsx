import * as React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/CardHeader";

import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class HomePage extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg">
        <Card>
          <CardHeader>Getting Started with Shepherd</CardHeader>
          <div className={styles.body}>
            <span>Welcome</span>
          </div>
        </Card>
      </div>
    );
  }
}

export default HomePage;
