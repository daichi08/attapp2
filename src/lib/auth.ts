import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signUp = (email: string, password: string) : Promise<void> => {
  return createUserWithEmailAndPassword(auth, email, password);
};
