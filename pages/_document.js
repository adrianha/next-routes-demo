import Document, { Head, Main, NextScript } from 'next/document';
import moment from 'moment';

let locale;

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, req }) {
    const { html, head, errorHtml, chunks } = renderPage()

    if (!process.browser) {
      locale = req.locale;
    }

    return {
      html,
      head,
      errorHtml,
      chunks,
      locale
    };
  }

  constructor(props) {
    super(props);

    moment.locale(props.locale);
  }

  render () {
    return (
     <html>
      <Head />
      <body className="app--body">
        <Main />
        <NextScript />
      </body>
     </html>
    )
  }
}
