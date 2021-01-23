import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPmz2XBX9ljHvWOFm-CVPnlWK60JXW3o0",
  authDomain: "slack-clone-d6702.firebaseapp.com",
  projectId: "slack-clone-d6702",
  storageBucket: "slack-clone-d6702.appspot.com",
  messagingSenderId: "234895882227",
  appId: "1:234895882227:web:c450fe01b56de149604486",
  measurementId: "G-6H5JLJ4ETS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;