import { useState } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
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
