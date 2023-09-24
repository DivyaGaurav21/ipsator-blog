import Link from 'next/link';
import { getAllBlogPost } from '@/sanity/sanityIntegration';
import { urlFor } from '@/sanity/sanity';
import Image from 'next/image';
import Hero from '@/components/Hero';

export function sliceSentenceToWords(sentence, numberOfWords) {
  const words = sentence.split(" ");
  const slicedWords = words.slice(0, numberOfWords);
  return slicedWords.join(" ");
}

const Home = async () => {
  const blogPosts = await getAllBlogPost();
  // console.log("APPPP", blogPosts.length)

  return (
    <>
      <Hero />
      <section className="py-10 bg-gray-100">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-red-700 font-mono">Latest Blog Posts</h2>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-3 mt-4">
            <button
              type="button"
              className="text-red-700 border border-red-600 rounded-full w-12 h-12 hover:bg-red-700 hover:text-white focus:bg-red-800"
            >
              <span className="font-bold text-2xl">&lt;</span>
            </button>
            <button
              type="button"
              className="text-red-700 border border-red-600 rounded-full w-12 h-12 hover:bg-red-700 hover:text-white focus:bg-red-800"
            >
              <span className="font-bold text-2xl">&gt;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
            {blogPosts.map((blogPost) => (
              <div
                key={blogPost._id}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <Link href={`/blog_post/${blogPost.slug.current}`}>
                  <div>
                    <img
                      src={urlFor(blogPost.mainImage).width(500).height(400).url()}
                      alt={blogPost.title}
                      className="w-full h-48 object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
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
                  <p className="mt-2 text-gray-600">
                    {sliceSentenceToWords(blogPost.body[0].children[0].text, 40)}
                  </p>
                  <Link href={`/blog_post/${blogPost.slug.current}`}>
                    <div className="inline-flex items-center justify-center mt-4 text-red-700 hover:text-red-800 hover:underline">
                      Continue Reading &rarr;
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button
              type="button"
              className="text-red-700 border border-red-600 rounded-full w-9 h-9 hover:bg-red-700 hover:text-white focus:bg-red-800"
            >
              <span className="font-bold text-2xl">&lt;</span>
            </button>
            <button
              type="button"
              className="text-red-700 border border-red-600 rounded-full w-9 h-9 hover:bg-red-700 hover:text-white focus:bg-red-800"
            >
              <span className="font-bold text-2xl">&gt;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


