import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <Container>
      <Stack direction="column" justifyContent="center" sx={{minHeight: '100vh'}}>
        <Stack direction="row"
          alignItems="center">
          <Box
            component="img"
            sx={{
              height: 60,
            }}
            alt="Habij logo"
            src={"logo.png"}
          />
          <Typography variant="h5" >
            Habij
          </Typography>
        </Stack>
        <Typography variant="h5" >
          Welcome Back
        </Typography>
        <Stack direction="column" spacing={2}
          mt={5} >
          <TextField
            type="email"
            required
            label="Email address"
            defaultValue="Brad@habij.com"
          />
          <TextField
            type="password"
            required
            label="Password"
            defaultValue="*********"
          />
          <Button variant="contained">SIGN IN</Button>

          <Button variant="text" >
            Not a user yet? Register here!
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}
