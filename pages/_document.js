import { useState } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
class MyDocument extends Document {

  constructor(props) {
    super(props);
    this.hostname = 'http://192.168.127.164:3001';
    console.log(this.hostname);
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://apis.google.com/js/api.js"></script>
          
              <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"
              />
          <Script
            id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript hostname={this.hostname} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
