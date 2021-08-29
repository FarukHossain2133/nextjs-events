
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles(){
   return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData;

}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => getPostData(postFile));
    const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1)
    return sortedPosts;
}


export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}


export function getSinglePost(slug) {
    const allPosts = getAllPosts()

    const post = allPosts.find(post => post.slug == slug);
    return post;
}





// function getPostData(fileName) {
//     const filePath = path.join(postsDirectory, fileName);
//     const fileContent = fs.readFileSync(filePath, 'utf-8');

//     const { data, content } = matter(fileContent);
//     const postSlug = fileName.replace(/\.md$/, '');

//     const postData = {
//         slug: postSlug,
//         ...data,
//         content
//     }

//     return postData;

// }