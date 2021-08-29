import Head from 'next/head'
import {getFeaturedEvents} from '../helpers/api-utils';
import EventList from '../components/events/eventList';
import NewsLetterRegistration from '../components/input/newsletter-registration';

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a log of events in youtube also" />
      </Head>
      <NewsLetterRegistration/>
      <EventList items={props.events} />
    </div>
  )
}


export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
      revalidate: 1800
    }
  }
}
