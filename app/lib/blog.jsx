import blogData from '../content/blogData';

export const blogPosts = blogData;

export function getBlogPost(slug) {
    return blogPosts.find((post) => post.slug === slug);
}
