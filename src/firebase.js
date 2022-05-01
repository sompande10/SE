import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDkUqRlMxrmSzvBqYMljeQv4DwtD9yopmQ",
  authDomain: "electsnu.firebaseapp.com",
  projectId: "electsnu",
  storageBucket: "electsnu.appspot.com",
  messagingSenderId: "20251188991",
  appId: "1:20251188991:web:e9c62edda0464d79c076ca",
  measurementId: "G-277NK2R6LM",
});

export default app;
export const auth = app.auth();
export const db = getFirestore(app);
