import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UserCredential } from 'firebase';
import { auth } from './firebase';

// サインアップ
export const signUp = (email: string, password: string) : Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// サインイン
export const signIn = (email: string, password: string) : Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
}
