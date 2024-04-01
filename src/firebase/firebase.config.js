// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
apiKey: "AIzaSyAGnjk_LDnmJt7Q_oajuBU80akAYCzd7Do",
authDomain: "module-12-module.firebaseapp.com",
projectId: "module-12-module",
storageBucket: "module-12-module.appspot.com",
messagingSenderId: "785309668323",
appId: "1:785309668323:web:d8526e0c205462157e06d6",
measurementId: "G-DJ6M8CWWN3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);