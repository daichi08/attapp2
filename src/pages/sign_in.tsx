import { Button, Container, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import SignInForm from '../components/SignInForm';

const SignIn = (): JSX.Element => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignIn;
