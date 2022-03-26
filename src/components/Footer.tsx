import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Footer = (): JSX.Element => {
  return (
    <>
      <AppBar position='static' sx={{ position: 'absolute', bottom: 0 }}>
        <Container>
          <Toolbar>
            <Typography>Footer</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
