import * as React from "react";
import Card from "../../components/Card";
import CardHeader from "../../components/CardHeader";
import GettingStarted from "../../components/GettingStarted";
import { getContactByEmail, ContactBasic } from "../../models/contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {
  contact: ContactBasic | null;
}

class HomePage extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {
    contact: null
  };

  public componentDidMount() {
    getContactByEmail("mike.havrill@gmail.com").then(contact => {
      this.setState({ contact });
    });
  }

  public render() {
    const { contact } = this.state;
    console.log("contact", contact);
    if (!contact) return null;
    return (
      <div className="w-full">
        <Card>
          <CardHeader>Getting Started with Shepherd</CardHeader>
          <div className="p-4">
            <GettingStarted contact={contact} />
          </div>
        </Card>
      </div>
    );
  }
}

export default HomePage;
