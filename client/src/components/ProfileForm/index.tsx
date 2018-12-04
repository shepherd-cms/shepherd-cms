import * as React from "react";
import Profile from "./Profile";
import { ContactBasic } from "../../models/contacts";
import { SimplePseudos } from "csstype";

interface IProps {}

interface IState {
  contact: ContactBasic;
}

class ProfileForm extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {};

  public state: IState = {
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      campus: "",
      service: ""
    }
  };

  constructor(props: any) {
    super(props);
  }

  private handleChange(contact: ContactBasic) {
    this.setState({ contact });
  }

  public submit(event: any) {
    event.preventDefault();
    alert("Submitting" + JSON.stringify(this.state.contact));
  }

  render() {
    return (
      <Profile
        contact={this.state.contact}
        onChange={contact => this.handleChange(contact)}
        onSubmit={(e: any) => this.submit(e)}
      />
    );
  }
}

export default ProfileForm;
