import React, { Fragment } from 'react';
import AllPosts from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-utils';
import Head from 'next/head';



const AllPostspage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>All My post</title>
                <meta
                    name="description"
                    content="All my programming related apge"
                />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostspage
