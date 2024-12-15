import ClientLayout from "@/layouts/client/layout";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <ClientLayout>
    <Component {...pageProps} />
  </ClientLayout>
}
