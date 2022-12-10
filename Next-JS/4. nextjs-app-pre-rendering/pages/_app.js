import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/*global head in all pages*/}
      <Head>
        <title>Next global title</title>
        <meta name={"viewport"} content={"initial-scale=1.0"} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
