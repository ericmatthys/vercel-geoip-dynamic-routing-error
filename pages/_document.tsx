import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  public render(): ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
