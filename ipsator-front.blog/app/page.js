import { getAllBlogPost } from '@/sanity/sanityIntegration';
import Hero from '@/components/Hero';
import BlogList from './server_component/BlogList';

//--Home page(Main page) of the application--//
//--I dvide over the main page to separate Hero and BlogList sections (Header and Footer is also part of page which i attach in layout)--//
const Home = async () => {
  // after calling getAllBlogPost functions we get whole list of blog posts from the sanity CMS
  //Hero section put information about blog posts category and one Image
  //BlogList section is for rendering purposes of the blog posts list
  const blogPosts = await getAllBlogPost();

  return (
    <>
      <Hero />
      <BlogList
        blogPosts={blogPosts}
      />
    </>
  );
};

export default Home;


