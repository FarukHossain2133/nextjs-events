import React, { Fragment } from 'react';
import Hero from 'components/home-page/hero';
import FeaturedPost from 'components/home-page/featured-posts';
import {getFeaturedPosts} from 'lib/posts-utils';
import Head from 'next/head';

const HomePage = (props) => {

  return (
    <Fragment>
      <Head>
        <title>Faruk Blog</title>
        <meta 
          name="description" 
          content="This is my about programming web content"
        />
      </Head>
      <Hero />
      <FeaturedPost posts ={props.posts} />
    </Fragment>
  )
}

export function getStaticProps(){
 const featuredPosts = getFeaturedPosts();

 return {
   props: {
     posts: featuredPosts
   }
 }
}



export default HomePage
