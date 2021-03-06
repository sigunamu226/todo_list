// firebase/index.js

import firebase from "firebase";
import { firebaseConfig } from "./firebase/config.js";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();
