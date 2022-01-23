import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// connect with firebase for auth
const firebaseConfig = {
  apiKey: "AIzaSyAWJPh4DAKBF10I4DcDD8Yk844nbh6dXEw",
  authDomain: "playtomic-d9d86.firebaseapp.com",
  projectId: "playtomic-d9d86",
  storageBucket: "playtomic-d9d86.appspot.com",
  messagingSenderId: "66313153152",
  appId: "1:66313153152:web:93c73178f0797fc20e1465",
  measurementId: "G-0CK60VBHPJ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  export  {firebase}
