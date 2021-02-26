import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}