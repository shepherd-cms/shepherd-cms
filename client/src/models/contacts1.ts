import * as firebase from "firebase/app";
import "firebase/firestore";

// var config = {
//   apiKey: "AIzaSyBZld3ROfOhlziPvixCuqLCsqHqmyGPe6o",
//   authDomain: "shepherd-b354b.firebaseapp.com",
//   databaseURL: "https://shepherd-b354b.firebaseio.com",
//   projectId: "shepherd-b354b",
//   storageBucket: "shepherd-b354b.appspot.com",
//   messagingSenderId: "874680551201"
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
const firestore = firebase.firestore();

// const contactModel(id: any, name: any, timestamp: any) => ({
//   id: id,
//   firstName: name,
//   lastName: name,
// });

export function getContactByEmail(email: String) {
  const contactsRef = firestore.collection("contacts");
  return contactsRef
    .where("email", "==", email)
    .get()
    .then(snapshot => {
      let data: any = {};
      snapshot.forEach(doc => {
        console.log("snapshot", doc.data());
        data = doc.data();
      });
      return data;
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
}
