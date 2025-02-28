import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const postsCollection = collection(db, "posts");

export const addPost = async (post) => {
    try {
        const docRef = await addDoc(postsCollection, post);
        console.log("Post añadido con ID:", docRef.id);
    } catch (error) {
        console.error("Error al agregar post:", error);
    }
};

export const getPosts = async () => {
    try {
        const querySnapshot = await getDocs(postsCollection);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al obtener posts:", error);
        return [];
    }
};

export const deletePost = async (id) => {
    try {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        console.log("Post eliminado con ID:", id);
    } catch (error) {
        console.error("Error al eliminar post:", error);
    }
};