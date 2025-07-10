
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCHZA2CZRauqES86GOpf_JoZ8bWBe3oT-I",
    authDomain: "comision-73705-rovida.firebaseapp.com",
    projectId: "comision-73705-rovida",
    storageBucket: "comision-73705-rovida.firebasestorage.app",
    messagingSenderId: "282646852765",
    appId: "1:282646852765:web:972814538d3be2f1a4d074"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

