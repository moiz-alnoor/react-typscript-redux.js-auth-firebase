import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// connect with firebase for auth
const firebaseConfig:object = {

};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  export  {firebase}
