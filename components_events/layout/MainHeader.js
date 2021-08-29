import Link from 'next/link';
import React from 'react';
import classes from './mainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events">All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
