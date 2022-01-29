import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>



      </Head>
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp