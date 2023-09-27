import { urlFor } from "@/sanity/sanity";
import PortableText from "react-portable-text";

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
                <div className="flex flex-row rounded-2xl bg-yellow-300 items-center justify-around h-[80px]">
                    <h3 className="text-slate-900 font-extrabold text-xl font-sans">Blog Content</h3>
                    <p className="text-red-900 font-bold font-mono"> Published on : {_createdAt.slice(0, 10)}</p>
                </div>
                <div className="w-full md:w-[65%] p-12 bg-slate-900 m-auto rounded-3xl mt-6 text-white">
                    <PortableText
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8k08ik80"}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
                        content={body}
                        serializers={{
                            // Serializer for h1 elements
                            h1: ({ children }) => <h1 className="text-4xl font-bold my-4 text-yellow-300 font-mono">{children}</h1>,

                            // Serializer for h2 elements
                            h2: ({ children }) => <h2 className="text-3xl font-semibold my-3 font-serif text-yellow-200">{children}</h2>,

                            // Serializer for unordered lists (ul)
                            ul: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,

                            // Serializer for ordered lists (ol)
                            ol: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,

                            // Serializer for list items (li)
                            li: ({ children }) => <li className="mb-2 text-orange-400 font-mono">{children}</li>
                        }
                        }
                    />
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
