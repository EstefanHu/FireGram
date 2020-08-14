import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCv0fMmq7mIjmysk-mRvXhaatJwOre9sSU",
  authDomain: "firegram-81a2a.firebaseapp.com",
  databaseURL: "https://firegram-81a2a.firebaseio.com",
  projectId: "firegram-81a2a",
  storageBucket: "firegram-81a2a.appspot.com",
  messagingSenderId: "852722621982",
  appId: "1:852722621982:web:48034082560fec72bf980f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };