import { signUp } from "../lib/auth";

const Home = () : JSX.Element => {
  const createAccount = signUp("hoge@hoge.hogea", "hogehogea");
  createAccount.then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return (
    <div>
      Hello, World!
    </div>
  )
}

export default Home
