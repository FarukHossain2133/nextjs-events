import React, { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import EventError from '../../components/ui/error-alert';
import Head from 'next/head';
import Comments from '../../components/input/comments';

const SingleEvents = (props) => {
    const { event } = props;
    // const router = useRouter();
    // const id = router.query.eventId;
    // const event = getEventById(id);
    if (!event) return <div className="center"><p>Loading...</p></div>

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </Fragment>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const event = await getEventById(params.eventId);

    return {
        props: {
            event: event,
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const paths = await getFeaturedEvents();
    const transFormDataq = paths.map(el => ({ params: { eventId: el.id } }))

    return {
        paths: transFormDataq,
        fallback: 'blocking'
    }

}

export default SingleEvents
