import React, { Component } from 'react';
import Doucment, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocuemnt extends Doucment {

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}
