// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Otros metadatos, estilos globales, scripts, etc. */}
        </Head>
        <body className="bg-[#F5F5F5]">
          <Main />
          <NextScript />
          <Toaster />{" "}
          {/* Por ejemplo, aquí puedes incluir componentes globales como Toaster */}
        </body>
      </Html>
    );
  }
}
