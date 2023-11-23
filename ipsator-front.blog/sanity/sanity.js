/**
 * The `createClient` and `imageUrlBuilder` functions are used to create a Sanity client and generate image URLs, respectively.
 * This module exports the configured Sanity client (`sanityClient`) and a function (`urlFor`) for building image URLs.
 * 
 * @module sanity
 */

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "8k08ik80"
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-20'

// Sanity project configuration
// i willl make .env file later
const projectId = "8k08ik80"
const dataset = "production"
const apiVersion = '2023-10-09'

// Configuration object for creating the Sanity client
const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
}
// Create an image URL builder using the Sanity client configuration
const builder = imageUrlBuilder(config);
// Create a Sanity client instance
export const sanityClient = createClient(config);
/**
 * The `urlFor` function generates a Sanity image URL using the configured image builder.
 * 
 * @function
 * @param {Object} source - The source object representing the image asset.
 * @returns {string} - Returns the generated image URL.
 */
export const urlFor = (source) => builder.image(source);
