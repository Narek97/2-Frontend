import "../styles/globals.scss";
import {RecoilRoot} from 'recoil';
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


function MyApp({Component, pageProps}: AppProps) {
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default MyApp;
