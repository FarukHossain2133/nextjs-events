import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import classes from './eventItem.module.css';
import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';

const eventItem = (props) => {

    const { title, image, date, location, id } = props
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formatedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <Image
                src={"/" + image}
                alt={title}
                width = {250}
                height = {160}
            />
            {/* <img src={"/" + image} alt={title} /> */}
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>
                            {formatedAddress}
                        </address>
                    </div>
                </div>
                <div className={classes.action}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default eventItem
