import  Head  from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Head>
                    <title>Marcelina Anggraeni</title>
                </Head>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
