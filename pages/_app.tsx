import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Profile from "../components/Profile";
import { RecoilRoot, useRecoilState } from "recoil";
import { profileState } from "../state/profileState";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Profile />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
export default App;
