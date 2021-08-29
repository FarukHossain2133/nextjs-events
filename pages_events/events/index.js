import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../helpers/api-utils';
import EvnetsSearch from '../../components/events/events-search';

const index = ({ allEvents }) => {

    const router = useRouter();
    const findEventHandler = (year, month) => {
        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);
    }

    return (
        <Fragment>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="Find a log of events in youtube also" />
            </Head>
            <EvnetsSearch onSearch={findEventHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}


export async function getStaticProps() {
    const allEvents = await getAllEvents();
    return {
        props: {
            allEvents
        },
        revalidate: 60
    }
}

export default index
