import "../styles/global.scss";
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil'
import type { AppProps } from "next/app";
import BaseLayout from "../components/layout/base_layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </RecoilRoot>
  );
}

export default MyApp;
