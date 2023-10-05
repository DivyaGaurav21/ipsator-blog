import { urlFor } from "@/sanity/sanity"
import Link from "next/link"
import Styles from '../styles/BlogList.module.css'
import NextPrevBtn from "./NextPrevBtn"
import Image from "next/image"

const BlogList = ({ blogPosts }) => {
    return (
        <section className={Styles.mainsection}>
            <h2 className="heading">Latest Blog Posts</h2>
            {/* button for next and prev button in desktop screen  */}
            <div className={Styles.desktopbtn}>
                <NextPrevBtn />
            </div>
            {/* Main Blog Post List  */}
            <div className={Styles.bloglist}>

                {/* we can make separate component for singlepost but --->  */}
                {blogPosts.map((blogPost) => (
                    <div
                        key={blogPost._id}
                        className={Styles.singlepost}
                    >
                        {/* using next Link and next Image  */}
                        <Link href={`/blog_post/${blogPost.slug.current}`}>
                            <div className={Styles.blogimg}>
                                <Image
                                    src={urlFor(blogPost.mainImage).url()}
                                    alt={blogPost.title}
                                    width={400}
                                    height={100}
                                />
                            </div>
                        </Link>

                        <div className="p-4">
                            <div className="mb-2">
                                <span className={Styles.authorname}>
                                    {blogPost.author.name}
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold">
                                <Link href={`/blog_post/${blogPost.slug.current}`}>
                                    <div className="text-gray-800 hover:underline">
                                        {blogPost.title}
                                    </div>
                                </Link>
                            </h2>
                            <p className={Styles.para}>
                                {blogPost.body[0].children[0].text}
                            </p>
                            <Link href={`/blog_post/${blogPost.slug.current}`}>
                                <div className={Styles.continue}>
                                    Continue Reading &rarr;
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* button for next and prev button in Mobile screen */}
            <div className={Styles.mobilebtn}>
                <NextPrevBtn />
            </div>

        </section >
    )
}

export default BlogList