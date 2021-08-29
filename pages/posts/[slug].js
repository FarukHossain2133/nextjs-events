import React, { Fragment } from 'react';
import PostContent from 'components/posts/post-detail/post-content';
import { getPostsFiles, getPostData } from 'lib/posts-utils';
import Head from 'next/head';

const SingleDetailpage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>
                    {props.post.title}
                </title>
                <meta
                    name="description"
                    content={props.post.excerpt}
                />
            </Head>
            <PostContent post={props.post} />
        </Fragment>
    )
}

export function getStaticProps(context) {
    const { slug } = context.params;

    const post = getPostData(slug);

    return {
        props: {
            post: post
        },
        revalidate: 600
    }

}

export function getStaticPaths() {
    const allPosts = getPostsFiles();

    const staticPaths = allPosts.map(fileName => ({ params: { slug: fileName.replace(/\.md$/, "") } }))

    return {
        paths: staticPaths,
        fallback: false

    }
}

export default SingleDetailpage
