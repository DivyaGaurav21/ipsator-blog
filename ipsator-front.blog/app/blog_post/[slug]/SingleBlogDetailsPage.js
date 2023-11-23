/**
 * This component renders details of a single blog post including the title, main image, body content, author details, and a form for submitting comments.
 * It utilizes the PortableText component for rendering rich text content with customized serializers.
 * @param {Object} blogDetail - The detailed information about the blog post received as props.
 * @returns {JSX.Element} - Returns the JSX element for the SingleBlogDetailsPage.
 */

import { urlFor } from "@/sanity/sanity";
import PortableText from "react-portable-text";
import Styles from '../../styles/SingleBlog.module.css'
import Form from "@/components/Form";

const SingleBlogDetailsPage = ({ blogDetail }) => {
    // Extract relevant information from the blogDetail prop
    const {
        _id,
        slug,
        _createdAt,
        author,
        mainImage,
        body,
        categories,
        title,
        comments,
    } = blogDetail;


    return (
        <div className={Styles.postcontainer}>
            {/* Blog Image with Title */}
            <div className={Styles.postheader}>
                <img
                    src={urlFor(mainImage).url()}
                    alt={slug.current}
                    className={Styles.postimg}
                />
                <div className={Styles.posttitle}>
                    <h2 className={Styles.titleh}>{title}</h2>
                </div>
            </div>

            {/* Blog Body */}
            <div className="mt-2">
                <div className={Styles.blogbody}>
                    <h3 className={Styles.blogContent}>Blog Content</h3>
                    <p className={Styles.publish}> Published on : {_createdAt.slice(0, 10)}</p>
                </div>
                <div className={Styles.richtext}>
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
                            li: ({ children }) => <li className="mb-2 text-orange-400 font-mono text-sm">{children}</li>
                        }
                        }
                    />
                </div>
            </div>

            <div className={Styles.author}>
                {/* Author Detail */}
                <div className={Styles.authorh}>
                    <h3 className={Styles.authorname}>Author : {author.name} : (BIO)</h3>
                    <p className={Styles.authorbio}>{author.bio}</p>
                </div>
                {/* form for comment on blog post */}
                <Form />
            </div>

            <div>
                {
                    console.log(comments)
                    // comments.map(comment =>
                    //     <h1>{comment}</h1>
                    // )
                    //i will update the comment soon
                }
            </div>

        </div>
    );
};

export default SingleBlogDetailsPage;
