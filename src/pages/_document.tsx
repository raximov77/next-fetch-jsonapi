import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href={`${process.env.APP_PUBLIC_BASE_PATH}/favicon/favicon.png`} sizes="any" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
