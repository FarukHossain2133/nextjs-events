import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/eventList';
import ResultTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import useSWR from 'swr';
import Head from 'next/head';

const FilteredEvents = (props) => {
    const [loadedEvents, setLoadedEvents] = useState()
    const router = useRouter();
    const filteredData = router.query.slug;

    const { data, error } = useSWR("https://nextjs-course-b2897-default-rtdb.firebaseio.com/events.json");

    useEffect(() => {
        if (data) {
            const events = [];
            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key]
                })
            }
            setLoadedEvents(events);
        }
    }, [data])

    let pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta
                name="description"
                content={`A list of filtered events `} />
        </Head>
    )

    if (!loadedEvents) return <Fragment>{pageHeadData}<p className="center">Loading...</p></Fragment>

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

     pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta
                name="description"
                content={`All events for ${`${numYear}/${numMonth}`}`} />
        </Head>
    )


    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2022 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your value</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show Al Evnents</Button>
                </div>
            </Fragment>
        )

    }

    const filteredEvents = () => {

        let filteredEvents = loadedEvents.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
        });

        return filteredEvents;
    }

    if (!filteredEvents() || filteredEvents().length === 0) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>No events found for the choosen filter</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show Al Evnents</Button>
                </div>
            </Fragment>
        )

    }

    const date = new Date(numYear, numMonth - 1);
    return (
        <Fragment>
            {pageHeadData}
            <ResultTitle
                date={date}
            />
            <EventList items={filteredEvents()} />
        </Fragment>
    )
}

// export async function getServerSideProps(context) {

//     const { params } = context;
//     const filteredData = params.slug;

//     const filteredYear = filteredData[0];
//     const filteredMonth = filteredData[1];

//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;
//     if (isNaN(numYear) || isNaN(numMonth) || numYear > 2022 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//         return {
//             props: { hasError: true }
//             // notFound: true,
//             // redirect: {
//             //     destination: "/error"
//             // }
//         }

//     }

//     const filteredEvents = await getFilteredEvents({
//         year: numYear,
//         month: numMonth
//     });

//     return {
//         props: {
//             filteredEvents,
//             date: {
//                 year: numYear,
//                 month: numMonth
//             }
//         }
//     }
// }

export default FilteredEvents
