import '@/styles/globals.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import queryClientInstance from '../instances/react-query.instance';
import { useEffect } from "react";
import queryClientInstance from '@/instances/react-query.instance';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);


  return(
    <>
      <QueryClientProvider client={queryClientInstance}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
    )
}
