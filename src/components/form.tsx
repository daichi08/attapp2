import { Box, TextField } from "@mui/material"

const SignInForm = () : JSX.Element => {
  return (
    <Box 
      component="form"
      sx={{
        '& > :not(style)' : {m: 1, width: '50ch'},
      }}
    >
      <TextField id="signInEmailForm" label="Email" variant="outlined"/>
      <TextField id="signInPasswordForm" label="Password" type="password" variant="outlined"/>
    </Box>
  )
}

export { SignInForm }