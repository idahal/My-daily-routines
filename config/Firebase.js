import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Import keys from .env-file
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID
} from "react-native-dotenv";

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const Firebase = app.initializeApp(config);
export default Firebase;

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   MESSAGE_SENDER_ID,
//   APP_ID
// } from "react-native-dotenv";

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: "",
//   messagingSenderId: MESSAGE_SENDER_ID,
//   appId: APP_ID
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export const auth = firebase.auth();
// export const storage = firebase.storage();

// window.firebase = firebase;

// // create users collection
// export const createUsersDocument = async user => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email } = user;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         email,
//         createdAt
//       });
//     } catch (error) {
//       console.error("Error creating user", error.message);
//     }
//   }

//   return getUserDocument(user.uid);
// };

// export const getUserDocument = async uid => {
//   if (!uid) return null;
//   try {
//     return firestore.collection("users").doc(uid);
//   } catch (error) {
//     console.error("Error fetching user", error.message);
//   }
// };

// export default firebase;
