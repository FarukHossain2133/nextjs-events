import React from 'react';
import PostsGrid from 'components/posts/posts-grid';
import classes from './featured-posts.module.css';

const FeaturedPosts = (props) => {

    return (
        <section className={classes.latest}>
            <h1>Featured Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPosts
