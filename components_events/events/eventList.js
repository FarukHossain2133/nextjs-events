import React from 'react';
import EventItem from './eventItem';
import classes from './eventList';

const eventList = (props) => {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(event => <EventItem
                id={event.id}
                key={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
            />)}
        </ul>
    )
}

export default eventList
