import Layout from '@/components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (    
    <Layout>
      {/* Gelen bileşeni ve sayfa özelliklerini yerleştirir */}
      <Component {...pageProps} />    
    </Layout>
  );
}

export default MyApp;
