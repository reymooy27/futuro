import { AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement,
  auth?: boolean

}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        {Component.auth ? (
          <Auth>
            {getLayout(<Component {...pageProps} />)}
          </Auth>
        ) : (
          <>
          {getLayout(<Component {...pageProps} />)}
          </>
        )}
      </ChakraProvider>
    </SessionProvider>
  );
};

function Auth({ children }: { children: JSX.Element }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return (<div>Loading...</div>)
  }

  return children;
}

export default api.withTRPC(MyApp);
