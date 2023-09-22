import Link from 'next/link';
import { getAllBlogPost } from '@/sanity/sanityIntegration';
import { urlFor } from '@/sanity/sanity';
import Image from 'next/image';

export function sliceSentenceToWords(sentence, numberOfWords) {
  const words = sentence.split(" ");
  const slicedWords = words.slice(0, numberOfWords);
  return slicedWords.join(" ");
}

const Home = async () => {
  const blogPosts = await getAllBlogPost();
// console.log("APPPP", blogPosts.length)

  return (
    <section className="py-10 bg-neutral-400 sm:py-16 lg:py-14">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-red-950">Latest from blog</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-slate-900 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <button type="button" className=" text-red-600 border border-red-500 rounded w-9 h-9 hover:bg-neutral-700 hover:text-white focus:bg-neutral-800">
              <span className='font-bold text-2xl'>  &lt;</span>
            </button>
            <button type="button" className=" text-red-600 border border-red-500 rounded w-9 h-9 hover:bg-neutral-700 hover:text-white focus:bg-neutral-800">
              <span className='font-bold text-2xl'> &gt;</span>
            </button>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-6 lg:grid-cols-3 lg:max-w-full">

          {
            blogPosts.map((blogPost) => (
              <div className="overflow-hidden bg-neutral-300 rounded shadow" key={blogPost._id}>
                <div className="p-5">
                  {/* className="object-cover w-full h-full" */}
                  <div className="relative">
                    <Link href="/blog-post">
                      <img src={urlFor(blogPost.mainImage).width(500).height(400).url()} />
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                        {blogPost.author.name}
                      </span>
                    </div>
                  </div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{blogPost._createdAt.slice(0, 10)}</span>
                  <p className="mt-5 text-2xl font-semibold">
                    <Link href="/blog-post">
                      {blogPost.title}
                    </Link>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    {sliceSentenceToWords(blogPost.body[0].children[0].text, 40)}
                  </p>
                  <Link href="/blog-post">
                    <p className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-red-700 transition-all duration-200 border-b-2 border-transparent hover:border-red-600 focus:border-red-600">
                      Continue Reading &gt;
                    </p>
                  </Link>
                </div>
              </div>
            ))
          }



        </div>
        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button type="button" className=" text-red-600 border border-red-500 rounded w-9 h-9 hover:bg-neutral-700 hover:text-white focus:bg-neutral-800">
            <span className='font-bold text-2xl'>  &lt;</span>
          </button>
          <button type="button" className=" text-red-600 border border-red-500 rounded w-9 h-9 hover:bg-neutral-700 hover:text-white focus:bg-neutral-800">
            <span className='font-bold text-2xl'> &gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;


