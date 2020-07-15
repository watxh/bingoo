import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeL-V_rDGnsWHQ_lKp8Mfzq0wbEdpqEPU",
  authDomain: "bingoo-58847.firebaseapp.com",
  databaseURL: "https://bingoo-58847.firebaseio.com",
  projectId: "bingoo-58847",
  storageBucket: "bingoo-58847.appspot.com",
  messagingSenderId: "298560338455",
  appId: "1:298560338455:web:ac9d28898eccb817097a52",
  measurementId: "G-R9S9LYP2PV",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
