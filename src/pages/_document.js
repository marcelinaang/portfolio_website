import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="en-GB">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=ABeeZee:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="apple-touch-icon" href="/logo192.png" />
                    {/* SEO optimization done manually */}
                    <link
                        rel="canonical"
                        href="https://marcelinaanggraeni.com"
                    />
                    <meta
                        name="description"
                        content="Front end developer, QA, tech enthusiast. Provides website creation service (UI/UX design, development, deployment, etc.)."
                    />
                    <meta
                        name="robots"
                        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                    />
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-E0LX822W4C"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E0LX822W4C', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
