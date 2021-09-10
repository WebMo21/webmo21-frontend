import { useEffect } from "react";
import { Provider } from "next-auth/client";
import AOS from "aos";

import "../styles/globals.css";
import "aos/dist/aos.css";
import "@notus-pro/react/tailwind.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
