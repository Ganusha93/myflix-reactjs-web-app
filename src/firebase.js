import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCuT51ouQ8wSsE7w3b1pKR74UK6YJ5coG4",
  authDomain: "myflix-build.firebaseapp.com",
  projectId: "myflix-build",
  storageBucket: "myflix-build.appspot.com",
  messagingSenderId: "416295525738",
  appId: "1:416295525738:web:804cf9333a5d06ab631913"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export{auth}
  export default db;