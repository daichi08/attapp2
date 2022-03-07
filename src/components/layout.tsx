import { Container } from "@mui/material";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../lib/auth";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) : JSX.Element => {
  const { currentUser } = useContext(AuthContext);

  if (typeof currentUser == "undefined") {
    return <Container>Loading...</Container>;
  }

  return <Container>{children}</Container>;
};

export default Layout;
