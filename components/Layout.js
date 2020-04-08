import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <title>Remitano</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;