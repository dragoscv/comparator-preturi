import { app } from '../firebase.config.js'
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore(app);
async function addToDb() {
    const docRef = await addDoc(collection(db, "videos"), {
        dateAdded: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
}
addToDb()