import * as firebase from "firebase/app";
import "firebase/firestore";
import { ContactBasic } from "./contact.types";

const firestore = firebase.firestore();
export function getContactByEmail(email: String): Promise<ContactBasic> {
  const contactsRef = firestore.collection("contacts");
  return contactsRef
    .where("email", "==", email)
    .get()
    .then(snapshot => {
      let data: any = {};
      snapshot.forEach(doc => {
        data = doc.data();
      });
      return data;
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
}
