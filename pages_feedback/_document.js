import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDoument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <div id="overlay"/>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDoument