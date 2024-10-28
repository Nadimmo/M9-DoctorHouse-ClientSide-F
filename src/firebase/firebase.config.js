// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6jD8MqUqkKmsB564-h9LkTRqUqOKOAfU",
  authDomain: "dochouse-b6694.firebaseapp.com",
  projectId: "dochouse-b6694",
  storageBucket: "dochouse-b6694.appspot.com",
  messagingSenderId: "467248171460",
  appId: "1:467248171460:web:295de226b50ae8728cfc91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app