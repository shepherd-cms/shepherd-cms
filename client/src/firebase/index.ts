import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

import config from "../config/firebaseConfig";
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const contactsRef = firestore.collection("contacts");
const authRef = firebase.auth();

const doCreateUser = (
  id: string,
  firstName: string,
  lastName: string,
  email: string
) =>
  firebase
    .database()
    .ref(`users/${id}`)
    .set({
      email,
      firstName,
      lastName
    });

export { firestore, authRef, contactsRef, firebase, doCreateUser };
