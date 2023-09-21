import { sanityClient } from "./sanity";

export async function getAllBlogPost() {
    const query = `*[_type == 'post']{
        _id,
        title,
        author->{
          name,
          image
        },
      }`;
    try {
        const posts = await sanityClient.fetch(query);
        return posts;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}