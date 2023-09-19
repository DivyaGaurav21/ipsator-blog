import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-20'

const config = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true,
})

const builder = imageUrlBuilder(config);

export const sanityClient = createClient(config);
export const urlFor = (source) => builder.image(source);
