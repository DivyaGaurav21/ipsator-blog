import { urlFor } from "@/sanity/sanity";

const SingleBlogDetailsPage = ({ blogDetail }) => {
    const {
        _id,
        slug,
        _createdAt,
        author,
        mainImage,
        body,
        categories,
        title,
    } = blogDetail;

    return (
        <div className="bg-slate-300 p-4 rounded-lg shadow-lg">
            {/* Blog Image with Title */}
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={urlFor(mainImage).url()}
                    alt={title}
                    className="w-full h-[70vh] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full bg-slate-900 text-yellow-200 p-4">
                    <h2 className="text-3xl text-center font-semibold">{title}</h2>
                </div>
            </div>

            {/* Blog Body */}
            <div className="mt-6">
                <div className="flex flex-row rounded-2xl bg-neutral-400 items-center justify-around h-[80px]">
                    <h3 className="text-yellow-950 font-extrabold text-xl font-sans">Blog Content</h3>
                    <p className="text-red-900 font-bold font-mono"> Published on : {_createdAt.slice(0, 10)}</p>
                </div>
                <div className="w-full md:w-[50%] p-12 bg-slate-700 m-auto rounded-3xl mt-6">
                    {body.map((item, index) => (
                        <p key={index} className="text-white font-mono text-xl">{item.children[0].text}</p>
                    ))}c
                </div>
            </div>

            {/* Author Detail */}
            <div className="mt-6 bg-slate-900 rounded-lg p-10 max-w-[500px] ">
                <h3 className="text-2xl font-semibold text-yellow-800 text-center mb-3">Author : {author.name} : (BIO)</h3>
                <p className="text-white text-justify font-mono text-sm">{author.bio}</p>
            </div>

        </div>
    );
};

export default SingleBlogDetailsPage;
