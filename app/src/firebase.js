// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// 인증을 위한 import
import "firebase/compat/auth";
// 데이터베이스 import 
import "firebase/compat/database";
// 스토리지 이용을 위한 import
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmKtC3AJG5sY7EzrxOWQzO02X5ONspirc",
  authDomain: "react-firebase-chat-3e42a.firebaseapp.com",
  projectId: "react-firebase-chat-3e42a",
  storageBucket: "react-firebase-chat-3e42a.appspot.com",
  messagingSenderId: "104067082619",
  appId: "1:104067082619:web:c77f9403f57499d3b375de",
  measurementId: "G-C0B5X14R08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; //강좌에는 firebase를 export하라고 하지만 코드보면 app을 export 해야 한다.
