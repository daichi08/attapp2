import { Button, Grid, TextField } from "@mui/material"

const SignInForm = () : JSX.Element => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <TextField id="signInPasswordForm" label="Password" type="password" variant="outlined" margin="normal" fullWidth/>
        <TextField id="signInEmailForm" label="Email" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" size="large" fullWidth >Sign In</Button>
      </Grid>
    </Grid>
  )
}

export { SignInForm }