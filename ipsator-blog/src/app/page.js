// import { sanityClient } from "@/utils/sanity/sanity";

// export const getData = async () => {
//   console.log("getServerSideProps");
//   const query = `*[_type == 'post']{
//   _id,
//   title,
//   author->{
//     name,
//     image
//   },
//   mainImage,
//   _createdAt
// }`;

//   try {
//     const { postData } = await sanityClient.fetch(query);
//     return postData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// export default async function HomeBlog() {
//   const data = await getData();
//   console.log(data);




//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <p>Divya Gaurav G</p>
//     </main>
//   )
// }


// pages/blog-posts.js

// import { sanityClient } from "@/utils/sanity/sanity";

// function BlogPosts({ posts }) {
//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post._id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BlogPosts;

// export async function getStaticProps() {
//   // Define your query to fetch blog posts
//   const query = `*[_type == 'post']{
//     _id,
//     title,
//     author->{
//       name,
//       image
//     },
//     mainImage,
//     body, // Include the 'body' field in your query
//     _createdAt
//   }`;

//   try {
//     const posts = await sanityClient.fetch(query);
//     console.log('posts are ', posts);

//     return {
//       props: {
//         posts,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       props: {
//         posts: [], // Return an empty array in case of an error
//       },
//     };
//   }
// }




import React from 'react'

const Home = () => {
  return (
    <div>Home Page</div>
  )
}

export default Home