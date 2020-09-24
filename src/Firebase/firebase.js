import app from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import "firebase/auth";

class firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
export default new firebase();
