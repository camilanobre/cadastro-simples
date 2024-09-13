import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Verifique se algum app já foi inicializado
if (!getApps().length) {
    initializeApp(firebaseConfig);
} else {
    getApp(); // Para obter o app já inicializado
}

// Exportando a instância do Firestore
const firestore = getFirestore();
export { firestore };
