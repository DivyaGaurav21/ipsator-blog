import { sanityClient } from "./sanity";

export async function getAllBlogPost() {
  const query = `*[_type == 'post']{
      _id,
      title,
      author->{
        name,
        image
      },
      mainImage,
      body,
      _createdAt,
      slug{
        current
      }
    }`;
  try {
    const posts = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}