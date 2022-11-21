import app from "./app.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribe(subscription) {
    const db = getFirestore(app);
    const characterForm = collection(db, "character-form");
    const docRef = await addDoc(characterForm, subscription);
    return docRef.id;
}

export async function getdata() {
    const db = getFirestore(app);
    const getCollection = collection(db, "character-form");
    const Snapshoot = await getDocs(getCollection);
    const list = Snapshoot.docs.map(doc => doc.data());
    return list;
}
