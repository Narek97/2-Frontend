import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta name={"viewport"} content={"content"} />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
