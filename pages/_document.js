import Document, { Head, Main, NextScript } from 'next/document';
import AppCSS from 'styles/app.css';

export default class MyDocument extends Document {
  render () {
    return (
     <html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: AppCSS }} />
      </Head>
      <body className="app--body">
        <Main />
        <NextScript />
      </body>
     </html>
    )
  }
}
