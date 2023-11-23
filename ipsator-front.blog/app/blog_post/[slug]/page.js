/**
 * This page component retrieves data for a single blog post based on the provided slug from Sanity CMS.
 * It fetches details of the blog post and all associated comments.
 * @param {Object} params - The parameters passed to the page, including the blog post slug.
 * @returns {JSX.Element} - Returns the SingleBlogDetailsPage component with the retrieved blog post details and comments.
 */
import { getComment, getSlugDetail } from "@/sanity/sanityIntegration";
import SingleBlogDetailsPage from "./SingleBlogDetailsPage";

export default async function Page({ params }) {
    // Retrieve detailed information about the blog post based on the provided slug
    // console.log(params);
    const [slugInfo] = await getSlugDetail(params.slug);
    // Retrieve all comments associated with the blog post
    const allcomment = await getComment();
    // Render the SingleBlogDetailsPage component with the blog post details and comments
    return (
        <SingleBlogDetailsPage blogDetail={slugInfo} allcomment={allcomment} />
    )
}