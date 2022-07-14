import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA-CC8l24TtFPefh-PO8Y8l7FlMCIXU7pw",
    authDomain: "masai-lms-dc74e.firebaseapp.com",
    projectId: "masai-lms-dc74e",
    storageBucket: "masai-lms-dc74e.appspot.com",
    messagingSenderId: "627881118186",
    appId: "1:627881118186:web:ecf9d018e9ed077e3c8a93"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//const facebookauthProvider = new firebase.auth.FacebookauthProvider();

export { auth, googleAuthProvider}