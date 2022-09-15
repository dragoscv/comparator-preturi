const { app } = require('../firebase.config.js')
const { getFirestore } = require("firebase/database")
const db = getFirestore(app);
const docRef = await addDoc(collection(db, "videos"), {
    dateAdded: new Date(),
});

console.log("Doc id: " + docRef.id);