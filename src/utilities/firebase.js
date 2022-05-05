// Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDyzSSxprww_WtdGW8r852rWGJwHCiAGQs",
  authDomain: "vue-full-course-51ebc.firebaseapp.com",
  projectId: "vue-full-course-51ebc",
  storageBucket: "vue-full-course-51ebc.appspot.com",
  messagingSenderId: "818590679376",
  appId: "1:818590679376:web:d8a27663672fabda062c55"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef =db.ref("chats");

 export default firebase;