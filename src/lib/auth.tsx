import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { createContext, useEffect, useState, FC } from 'react';
import { auth } from './firebase';

type AuthUserType = User | null | undefined;

interface AuthContextProps{
  currentUser: AuthUserType;
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUserType>( undefined );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{currentUser: currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
