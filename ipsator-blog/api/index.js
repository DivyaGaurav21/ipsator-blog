import { sanityClient } from "@/utils/sanity/sanity";

export const getServerSideProps = async () => {

    const query = `*[_type == 'post']{
    _id,
      title,
     author->{
       name,
       image
     },
      mainImage,
      _createdAt
  }`;
    const { postData } = await sanityClient.fetch(query);

    return {
        props: {
            postData
        }
    }
}