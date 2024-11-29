import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Header from '../app/components/header/Header';
import "../app/globals.css";
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const defaultLayout = (page: ReactElement) => (
        <>
          <Header />
          {page}
        </>
      );
    
      // Use the layout defined at the page level, if available, otherwise use the default layout
      const getLayout = Component.getLayout ?? defaultLayout;
    
      return getLayout(<Component {...pageProps} />);
}