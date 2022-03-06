import { Button, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../lib/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

const Home = (): JSX.Element => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Container>
      <Typography>Home</Typography>
    </Container>
  );
};

export default Home;
