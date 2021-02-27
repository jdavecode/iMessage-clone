import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoZd_KuxHt8jDcc1xCxZIf2imxU__dS9I",
  authDomain: "imessage-clone-gt.firebaseapp.com",
  projectId: "imessage-clone-gt",
  storageBucket: "imessage-clone-gt.appspot.com",
  messagingSenderId: "187442910553",
  appId: "1:187442910553:web:cb394a60fb7be8e86fe848",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
