import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sri Sathya Sai</title>
      </Head>
      <Header />
      <div className="box-wrapper">
      <Sidebar />
      <Main />
      <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}
