import LayoutDefault from "../layout";
import "./../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StateContextProvider } from "../store/state-context";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <StateContextProvider>
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </StateContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
