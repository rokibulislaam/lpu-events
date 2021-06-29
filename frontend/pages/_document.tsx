import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `
              (function () {
                // Change these if you use something different in your hook.
                var storageKey = 'darkMode';
                var attributeValueDark = 'dark';
                var attributeValueLight = 'light';
              
                function setClassOnDocumentBody(darkMode) {
                  document.documentElement.setAttribute(
                    'data-theme',
                    darkMode ? attributeValueDark : attributeValueLight
                  );
                  // document.body.classList.add(darkMode ? attributeValueDark : attributeValueLight);
                  // document.body.classList.remove(darkMode ? attributeValueLight : attributeValueDark);
                  // document.body.classList.add(darkMode ? attributeValueDark : attributeValueLight);
                  // document.body.classList.remove(darkMode ? attributeValueLight : attributeValueDark);
                }
              
                var preferDarkQuery = '(prefers-color-scheme: dark)';
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;
                try {
                  localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}
                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                  localStorageTheme = JSON.parse(localStorageTheme);
                }
              
                // Determine the source of truth
                if (localStorageExists) {
                  // source of truth from localStorage
                  setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                  // source of truth from system
                  setClassOnDocumentBody(mql.matches);
                  localStorage.setItem(storageKey, mql.matches);
                } else {
                  // source of truth from document.body
                  var isDarkMode = document.body.classList.contains(attributeValueDark);
                  localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                }
              })();
                `,
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
