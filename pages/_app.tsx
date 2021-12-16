import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Profile from "../components/Profile";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Profile />
      <Component {...pageProps} />
    </>
  );
}
export default App;
