// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import {getStorage, connectStorageEmulator} from "firebase/storage";
import { ref as storeref} from "firebase/storage" ;
import { getAuth } from "firebase/auth";
import {getDatabase,set, ref as dbref,connectDatabaseEmulator,get} from "firebase/database";


var firebaseConfig = {"projectId":"metudeutsch","appId":"1:812486750712:web:3535fc315443f18caea60d","storageBucket":"metudeutsch.appspot.com","apiKey":"AIzaSyBCPTa-i7eWI6PG697Rj_umCchU9_OgbF8","authDomain":"metudeutsch.firebaseapp.com","messagingSenderId":"812486750712","measurementId":"G-0XZVLBDTSZ"}
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export const database = getDatabase(app);


if (location.hostname === "localhost") {
// Point to the Storage emulator running on localhost.
connectStorageEmulator(storage, "127.0.0.1", 9199);
connectDatabaseEmulator(database, "localhost", 9000);
} 


export const storageRef = storeref(storage);
export const imagesRef = storeref(storage, 'images');

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