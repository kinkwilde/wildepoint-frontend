import Document, { Html, Head, Main, NextScript } from "next/document";

class NextDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        href="https://fonts.googleapis.com"
                        rel="preconnect"
                    />
                    <link
                        href="https://fonts.gstatic.com"
                        rel="preconnect"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Merriweather:wght@300;400;700;900&family=Montserrat:wght@300;400;700;900&display=swap"
                        rel="stylesheet"
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

export default NextDocument;
