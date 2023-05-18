import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
