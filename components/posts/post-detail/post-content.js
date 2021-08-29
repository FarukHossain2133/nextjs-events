
import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';


const PostContent = (props) => {
    const { title, image, slug, content } = props.post;

    const imagePath = `/images/posts/${slug}/${image}`

    const customRenderers = {
        image(img){
            return (<Image
                src={`/images/posts/${slug}/${img.src}`}
                alt={img.alt}
                width={600}
                height={300}
            />
            );
        }
    }
    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown renderers ={customRenderers}>{content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
