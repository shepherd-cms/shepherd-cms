import * as React from "react";
import Profile from "./Profile";
import { ContactBasic, putContactById } from "../../models/contacts";
import { connect } from "react-redux";

interface IProps {
  contact?: ContactBasic;
  updateProfile: any;
  userId: string;
}

interface IState {
  contact: ContactBasic;
}

function updateProfile(dispatch: any, user: ContactBasic, userId: string) {
  putContactById(user, userId).then(() => {
    dispatch({ type: "user::update", payload: user });
  });
}

class ProfileForm extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      contact: props.contact
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (state == props) {
      return null;
    }
    return props.contact;
  }

  private handleChange(contact: ContactBasic) {
    this.setState({ contact });
  }

  public submit(event: any) {
    event.preventDefault();
    this.props.updateProfile(this.state.contact, this.props.userId);
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

const mapStateToProps = (state: any) => {
  console.log("state", state);
  return {
    userId: state.auth.user.uid || null,
    contact: state.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateProfile: (user: ContactBasic, userId: string) =>
      updateProfile(dispatch, user, userId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
