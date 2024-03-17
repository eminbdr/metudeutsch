// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getDatabase,set, ref as dbref,connectDatabaseEmulator,get} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBCPTa-i7eWI6PG697Rj_umCchU9_OgbF8",
  authDomain: "metudeutsch.firebaseapp.com",
  databaseURL: "https://metudeutsch-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "metudeutsch",
  storageBucket: "metudeutsch.appspot.com",
  messagingSenderId: "812486750712",
  appId: "1:812486750712:web:3535fc315443f18caea60d",
  measurementId: "G-0XZVLBDTSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const database = getDatabase(app);



if (location.hostname === "localhost") {
connectDatabaseEmulator(database, "localhost", 9000);
} 

export async function linkClickCounter(button_name: string) {
  const buttonRef = dbref(database, button_name + '/');
  const snapshot = await get(buttonRef);

  if (snapshot.exists()) {
    // If the reference already exists, increment the count
    set(buttonRef, {
      count: snapshot.val().count + 1,
    });
  } else {
    // If the reference does not exist, create one with count starting from zero
    set(buttonRef, {
      count: 1,
    });
  }
}