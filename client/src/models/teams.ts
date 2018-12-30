import * as firebase from "firebase/app";
import "firebase/firestore";

var config = {};

// interface TeamSchema
// interface TeamBasic
// interface TeamFull
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const firestore = firebase.firestore();

export function teamModel(name: any, timestamp: any) {
  return {
    name: name,
    timestamp: timestamp
  };
}

export function getAllTeams() {
  const teamsRef = firestore.collection("teams");
  return teamsRef
    .get()
    .then(snapshot => {
      let data: any = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      return data;
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
}

export function addTeam(name: string) {
  const model = teamModel(name, firebase.database.ServerValue.TIMESTAMP);
  return firestore.collection("teams").add(model);
}

// TODO: delete
export function removeTeam(name: string) {
  const model = teamModel(name, firebase.database.ServerValue.TIMESTAMP);
  return firestore.collection("teams").add(model);
}
