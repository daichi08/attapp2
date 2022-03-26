import {
  TextField,
  Button,
  Card,
  CardHeader,
  Container,
  ButtonGroup,
} from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { RefObject, useRef, useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';

const SignInForm = (): JSX.Element => {
  const emailForm = useRef<HTMLInputElement>(null);
  const passwordForm = useRef<HTMLInputElement>(null);

  const signInAuth = (): void => {
    signInWithEmailAndPassword(
      auth,
      emailForm.current!.value,
      passwordForm.current!.value
    );
  };

  return (
    <Card sx={{ p: 2 }}>
      <Container maxWidth='xs'>
        <TextField
          fullWidth
          autoFocus
          id='emailForm'
          margin='normal'
          label='email'
          type='text'
          inputRef={emailForm}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              passwordForm.current?.focus();
            }
          }}
        />
        <TextField
          fullWidth
          id='passwordForm'
          margin='normal'
          label='password'
          type='password'
          inputRef={passwordForm}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              signInAuth();
            }
          }}
        />

        <ButtonGroup orientation='vertical' fullWidth>
          <Button
            variant='outlined'
            size='large'
            onClick={() => {
              signInAuth();
            }}>
            サインイン
          </Button>
          <Button
            variant='contained'
            size='large'
            color='error'
            onClick={() => {
              signInWithPopup(auth, googleProvider);
            }}>
            Googleでサインイン
          </Button>
        </ButtonGroup>
      </Container>
    </Card>
  );
};

export default SignInForm;
