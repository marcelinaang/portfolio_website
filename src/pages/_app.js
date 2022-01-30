import Head from "next/head";
import { DarkModeProvider } from "../components/DarkToggler/useDarkMode";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
    return (
        <>
            <DarkModeProvider>
                <Theme>
                    <Head>
                        <title>Marcelina Anggraeni</title>
                    </Head>
                    <Component {...pageProps} />
                </Theme>
            </DarkModeProvider>
        </>
    );
}
