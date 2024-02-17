import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, AuthError, UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string): Promise<{ result: UserCredential | null, error: any }> {
    let result: UserCredential | null = null,
        error: any = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    return { result, error };
}