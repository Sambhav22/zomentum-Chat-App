import firebase from "firebase";

class Firebase {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
  };
}
