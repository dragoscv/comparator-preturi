import { app } from '../firebase.config.js'
import { getFirestore } from "firebase/database";

const db = getFirestore(app);
const docRef = await addDoc(collection(db, "videos"), {
    dateAdded: new Date(),
});

console.log("Doc id: " + docRef.id);