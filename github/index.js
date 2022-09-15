const { app } = require('../firebase.config.js')
const { getFirestore } = require("firebase/database")
const db = getFirestore(app);
async function addToDb() {
    const docRef = await addDoc(collection(db, "videos"), {
        dateAdded: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
}
addToDb()