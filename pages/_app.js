import '../styles/globals.css'
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
