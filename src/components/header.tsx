import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../lib/auth";
import { auth } from "../lib/firebase";
import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button
            color="inherit"
            variant="text"
            onClick={(e) => {
              e.preventDefault;
              router.push("/");
            }}
          >
            <Typography>Header</Typography>
          </Button>

          <Container>
            {/* TODO: コンポーネント化 */}
            {currentUser ? (
              <ButtonGroup variant="text" color="inherit">
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    router.push("/dashboard");
                  }}
                >
                  ダッシュボード
                </Button>
                <Button
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  サインアウト
                </Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup variant="text" color="inherit">
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    router.push("/sign_in");
                  }}
                >
                  サインイン
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    router.push("/sign_up");
                  }}
                >
                  サインアップ
                </Button>
              </ButtonGroup>
            )}
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
