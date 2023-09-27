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
    // console.log(posts)
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAllCateogary() {
  const query = `*[_type == 'category']{
                _id, 
                title,
               description
           }`;
  try {
    const category = await sanityClient.fetch(query);
    return category;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getSlugDetail(slug_name) {
  const query = `*[_type == 'post' && slug.current == '${slug_name}']{
    _id,
    _createdAt,
    author->{
      name,
      bio
    },
    mainImage,
    body,
    categories,
    slug,
    title
  }`;
  try {
    const slug_detail = await sanityClient.fetch(query);
    return slug_detail;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

