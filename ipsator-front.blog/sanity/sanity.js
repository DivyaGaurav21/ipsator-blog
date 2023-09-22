import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "8k08ik80"
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-20'

const projectId = "8k08ik80"
const dataset = "production"
const apiVersion = '2023-09-21'

const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
}

const builder = imageUrlBuilder(config);
export const sanityClient = createClient(config);
export const urlFor = (source) => builder.image(source);
