import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
                <link rel='icon' href='logo.ico'/>
                <title>JM Grehuello Portfolio</title>
                <meta name='description' content='Juan Manuel Grehuello - Full Stack Developer - Portfolio Website'/>
                <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

export default MyDocument;