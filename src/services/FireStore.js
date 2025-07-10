
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';


export const getProducts = async () => {
    const productosCollection = collection(db, "productos");
    const snapshot = await getDocs(productosCollection);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};


export const getProductsByCategory = async (category) => {
    const productosCollection = collection(db, "productos");
    const q = query(productosCollection, where("category", "==", category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};