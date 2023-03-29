import '@/styles/globals.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);
  return <Component {...pageProps} />
}
