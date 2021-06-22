import { useEffect } from "react";
import AOS from "aos";

import "../styles/globals.css";
import "aos/dist/aos.css";
import "@notus-pro/react/tailwind.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      /*  easing: "ease-out-cubic",
      once: true,
      offset: 50, */
      delay: 200,
      duration: 1200,
      once: false,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
