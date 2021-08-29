import React, { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from 'components/contact/contact-form';

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta
                    name="descripton"
                    content="Contact with faruk hossatin"
                />
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage
