import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyCkCDQuGti4iDVov8Lu0AiV-KZyT55GL84",
    authDomain: "netflix-clone-ddf8b.firebaseapp.com",
    projectId: "netflix-clone-ddf8b",
    storageBucket: "netflix-clone-ddf8b.appspot.com",
    messagingSenderId: "516473839374",
    appId: "1:516473839374:web:833dd866b604e57126815f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app)