import { CircularProgress } from '@mui/material';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, FC, useEffect, useState } from 'react';
import { auth } from './firebase';

// TODO: 切り分け
type AuthUserType = User | null | undefined;

interface AuthContextProps {
  currentUser: AuthUserType;
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUserType>(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  if (typeof currentUser == 'undefined') {
    return <CircularProgress />;
  }

  if (currentUser) {
    if (
      router.pathname.toLowerCase().startsWith('/sign_in') ||
      router.pathname.toLowerCase().startsWith('/sign_up')
    ) {
      router.replace('/dashboard');
      return <CircularProgress />;
    }
  } else {
    if (router.pathname.toLocaleLowerCase().startsWith('/dashboard')) {
      router.replace('/');
      return <CircularProgress />;
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
