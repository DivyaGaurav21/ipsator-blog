/**
 * This module contains functions for fetching data from Sanity using the configured `sanityClient`.
 * It exports functions to get all blog posts, all categories, details for a specific slug, and all comments.
 *
 * @module sanityData
 * @requires sanity
 */
import { sanityClient } from "./sanity";

/**
 * Fetches all blog posts from Sanity.
 *
 * @async
 * @function
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of blog post objects.
 */

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
      },
    }`;
  try {
    const posts = await sanityClient.fetch(query);
    // console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/**
 * Fetches all categories from Sanity.
 *
 * @async
 * @function
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of category objects.
 */

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


/**
 * Fetches details for a specific blog post using its slug from Sanity.
 *
 * @async
 * @function
 * @param {string} slug_name - The slug of the blog post.
 * @returns {Promise<Object|null>} - Returns a promise that resolves to the details of the blog post or null if not found.
 */

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
    title,
    comments
  }`;
  try {
    const slug_detail = await sanityClient.fetch(query);
    // console.log(slug_detail)
    return slug_detail;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/**
 * Fetches all comments from Sanity.
 *
 * @async
 * @function
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of comment objects.
 */

export async function getComment() {
  const query = `*[_type == 'comment']{
  user,
  text
}`
  try {
    const allcomment = await sanityClient.fetch(query);
    return allcomment;
  } catch (error) {
    console.error("Error in fetching comment", error);
  }

}
