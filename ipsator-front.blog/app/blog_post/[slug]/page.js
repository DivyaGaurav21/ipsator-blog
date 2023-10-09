import { getComment, getSlugDetail } from "@/sanity/sanityIntegration";
import SingleBlogDetailsPage from "./SingleBlogDetailsPage";

export default async function Page({ params }) {
    // console.log(params);
    const [slugInfo] = await getSlugDetail(params.slug);
    // console.log(slugInfo);

    const allcomment = await getComment();

    return (
        <SingleBlogDetailsPage blogDetail={slugInfo} allcomment={allcomment} />
    )
}