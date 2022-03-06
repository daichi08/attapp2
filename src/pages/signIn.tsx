import { Button, Container, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <Typography>signInForm</Typography>
      <TextField
        label="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        label="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={() => {
        signInWithEmailAndPassword(auth, email, password)
      }}>サインイン</Button>
    </Container>
  );
};

export default SignIn;
