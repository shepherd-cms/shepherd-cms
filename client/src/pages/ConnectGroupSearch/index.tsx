import * as React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/CardHeader";

import "./styles.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class HomePage extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {};

  public render() {
    return (
      <div className="Card_Full">
        <Card>
          <CardHeader>My Connect Groups</CardHeader>
          <div>Table of My Connect Groups</div>
        </Card>

        <Card>
          <CardHeader>
            <div>Add Connect Groups</div>
            <div>
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </CardHeader>
          <div>List of Connect Groups</div>
        </Card>
        <Card>
          <CardHeader>
            <div>Search Connect Groups</div>
            <div>
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </CardHeader>
          <div>List of Connect Groups</div>
        </Card>
      </div>
    );
  }
}

export default HomePage;
