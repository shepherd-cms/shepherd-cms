import "firebase/firestore";
import { ContactBasic } from "./contact.types";
import { firestore } from "../../firebase";

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

export function putContactById(user: any, userId: string): Promise<any> {
  const contactsRef = firestore.collection("contacts");
  return contactsRef.doc(userId).set({ ...user });
}

export function createContactOnAuth(
  userId: string,
  email: string,
  firstName: string,
  lastName: string
): Promise<any> {
  const contactsRef = firestore.collection("contacts");
  return contactsRef.doc(userId).set({ email, firstName, lastName });
}

export function getContactById(userId: string): Promise<any> {
  const contactsRef = firestore.collection("contacts");
  return contactsRef
    .doc(userId)
    .get()
    .then(doc => {
      return doc.data();
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
}
