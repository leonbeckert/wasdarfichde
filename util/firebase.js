import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
