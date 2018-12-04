import * as React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/CardHeader";
import { getAllTeams } from "../../models/teams";

import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {
  teams: any;
}

class VolunteerTeams extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {
    teams: null
  };

  public componentDidMount() {
    getAllTeams().then((teams: any) => {
      this.setState({ teams });
    });
  }

  public render() {
    const { teams } = this.state;
    if (!teams) return null;
    return (
      <div className="w-full">
        <Card>
          <CardHeader>
            <div>My Current Volunteer Requests</div>
          </CardHeader>
          <div>
            <table className="w-full">
              <thead>
                <th> Team </th>
                <th> Location </th>
                <th> Scheduled Date </th>
                <th> Call Time </th>
                <th>Actions </th>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {this.state.teams.map((team: any, i: number) => {
                  return (
                    <tr key={i}>
                      <td> {team.label} </td>
                      <td> Scottsdale </td>
                      <td> 12/2/2018 </td>
                      <td> {team.callTime} </td>
                      <td> Accept | Decline </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  }
}

export default VolunteerTeams;
