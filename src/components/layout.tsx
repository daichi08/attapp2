import { CircularProgress, Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../lib/auth";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (typeof currentUser == "undefined") {
    return <CircularProgress />;
  }

  if (currentUser) {
    if (
      router.pathname.toLowerCase().startsWith("/sign_in") ||
      router.pathname.toLowerCase().startsWith("/sign_up")
    ) {
      router.replace("/dashboard");
      return <CircularProgress />;
    }
  } else {
    if (router.pathname.toLocaleLowerCase().startsWith("/dashboard")) {
      router.replace("/");
      return <CircularProgress />;
    }
  }

  return <>{children}</>;
};

export default Layout;
