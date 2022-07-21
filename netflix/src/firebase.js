import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ8FFxhfePvWDMh0V_6J1UhcdWVQ6ec2E",
  authDomain: "netflix-5d38d.firebaseapp.com",
  projectId: "netflix-5d38d",
  storageBucket: "netflix-5d38d.appspot.com",
  messagingSenderId: "596905003283",
  appId: "1:596905003283:web:ab1284d26004482c4632e6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default  db