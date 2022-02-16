import Head from "next/head";
import { DarkModeProvider } from "../components/DarkToggler/useDarkMode";
import { OuterScrollProvider } from "../components/Modal/useScrollHandler";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
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
