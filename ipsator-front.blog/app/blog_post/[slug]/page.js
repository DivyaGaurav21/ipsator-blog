import { getSlugDetail } from "@/sanity/sanityIntegration";
import SingleBlogDetailsPage from "./SingleBlogDetailsPage";

export default async function Page({ params }) {
    // console.log(params);
    const [slugInfo] = await getSlugDetail(params.slug);
    // console.log(slugInfo);

    return <div>
        <SingleBlogDetailsPage blogDetail={slugInfo} />

    </div>
}