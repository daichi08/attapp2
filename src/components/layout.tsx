import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../lib/auth";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (currentUser) {
    if (
      router.pathname.toLowerCase().startsWith("/signin") ||
      router.pathname.toLowerCase().startsWith("/signup")
    ) {
      router.replace("/");
      return <Container>Loading...</Container>;
    }
  }

  if (typeof currentUser == "undefined") {
    return <Container>Loading...</Container>;
  }

  return <Container>{children}</Container>;
};

export default Layout;
