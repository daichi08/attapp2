import { Button, Container, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../lib/firebase';

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <Typography>signUpForm</Typography>
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
        createUserWithEmailAndPassword(auth, email, password)
      }}>サインアップ</Button>
    </Container>
  );
};

export default SignUp;
