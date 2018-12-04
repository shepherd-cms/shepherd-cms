import * as React from "react";
import ProfileForm from "../../components/ProfileForm";
import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";

interface IProps {}

interface IState {}

class Profile extends React.Component<IProps, IState> {
  public render() {
    return <ProfileForm />;
  }
}

export default Profile;
