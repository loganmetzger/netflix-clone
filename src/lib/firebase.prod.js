import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCbIlIFXs00wJep2VjWzk_Ze_YqXpH66aY",
    authDomain: "netflix-clone-a95b5.firebaseapp.com",
    databaseURL: "https://netflix-clone-a95b5.firebaseio.com",
    projectId: "netflix-clone-a95b5",
    storageBucket: "netflix-clone-a95b5.appspot.com",
    messagingSenderId: "527388744283",
    appId: "1:527388744283:web:73d1ee9c746551a5a3fd7e",
    measurementId: "G-T6FF9X2L6N"
};

const firebase = Firebase.initializeApp(config);
// 
// seedDatabase + (firebase) -> This seeds data, do not uncommnet IT WILL SEED EVERYTHING AGAIN
// 
export { firebase };
