import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import { signOut } from "firebase/auth";
import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../lib/auth";
import { auth } from "../lib/firebase";

const Header = (): JSX.Element => {
  const { currentUser } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button
            color="inherit"
            variant="text"
            onClick={(e) => {
              e.preventDefault;
              Router.push("/");
            }}
          >
            <Typography>Header</Typography>
          </Button>

          <Box>
            {/* TODO: コンポーネント化 */}
            {currentUser ? (
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  signOut(auth);
                }}
              >
                サインアウト
              </Button>
            ) : (
              <ButtonGroup variant="text" color="inherit">
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    Router.push("/signIn");
                  }}
                >
                  サインイン
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    Router.push("/signUp");
                  }}
                >
                  サインアップ
                </Button>
              </ButtonGroup>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
