import React from 'react';
import {useRouter} from 'next/router';

const BlogPostspage = () => {
    const router = useRouter();

    console.log(router);
    return (
        <div>
            <h1>The blog posts</h1>
        </div>
    )
}

export default BlogPostspage
