import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { DarkModeProvider } from "../components/DarkToggler/useDarkMode";
import { OuterScrollProvider } from "../components/Modal/useScrollHandler";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag("config", "G-E0LX822W4C", {
                page_path: url,
            });
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <DarkModeProvider>
                <OuterScrollProvider>
                    <Theme>
                        <Head>
                            <title>Marcelina Anggraeni</title>
                        </Head>
                        <Component {...pageProps} />
                    </Theme>
                </OuterScrollProvider>
            </DarkModeProvider>
        </>
    );
}
