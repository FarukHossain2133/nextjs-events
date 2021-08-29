import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/extrovert-event.jpg"
                    alt="An image showing Faruk"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I am Faruk</h1>
            <p>I blog about web developemt reactjs nextjs</p>
        </section>
    )
}

export default Hero
