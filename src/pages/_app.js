import ClientLayout from "@/layouts/client/layout";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from "react";
import { wrapper } from "@/redux/store";

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <ClientLayout>
    <Component {...pageProps} />
  </ClientLayout>
}

export default wrapper.withRedux(App);
