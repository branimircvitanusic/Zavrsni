import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCdQXL2aiKCi3S9f4zHzR8K-FTMyVHJhuU",
  authDomain: "fooder-fsr.firebaseapp.com",
  databaseURL: "https://fooder-fsr.firebaseio.com",
  projectId: "fooder-fsr",
  storageBucket: "fooder-fsr.appspot.com",
  messagingSenderId: "866954287161"
};

  const fire = firebase.initializeApp(config);
  export default fire;

  
// Initialize Cloud Firestore through Firebase
export const firestore = firebase.firestore();

firestore.settings({
  timestampsInSnapshots: true
})