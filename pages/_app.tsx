import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import 'styles/globals.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Component {...pageProps} />
  );
}

export default App;
