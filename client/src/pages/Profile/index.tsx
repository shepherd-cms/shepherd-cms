import * as React from "react";
import ProfileForm from "../../components/ProfileForm";
import styles from "./styles.module.scss";
import "../../static/css/tailwind.min.css";
import { connect } from "react-redux";

interface IProps {
  user: any;
}

interface IState {}

class Profile extends React.Component<IProps, IState> {
  public render() {
    return <ProfileForm />;
  }
}

export default Profile;
