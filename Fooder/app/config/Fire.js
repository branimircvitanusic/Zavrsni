import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCdQXL2aiKCi3S9f4zHzR8K-FTMyVHJhuU",
    authDomain: "fooder-fsr.firebaseapp.com",
    databaseURL: "https://fooder-fsr.firebaseio.com",
    projectId: "fooder-fsr",
    storageBucket: "fooder-fsr.appspot.com",
    messagingSenderId: "866954287161"
  };
  const fire = firebase.initializeApp(config);
  export default fire;