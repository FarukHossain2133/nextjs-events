import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components_events/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {

  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="descripton" content="general page setup descripton" />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;