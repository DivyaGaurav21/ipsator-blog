import { sliceSentenceToWords } from '@/app/page';
import { getAllCateogary } from '@/sanity/sanityIntegration';

const Hero = async () => {
    const postCategory = await getAllCateogary();

    return (
        <div className="bg-slate-900 text-white py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <img
                        className="object-cover w-[95%] m-auto md:w-full rounded-lg shadow-lg"
                        alt="hero_image"
                        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                </div>
                <div className="w-[95%] m-auto lg:w-1/2 lg:pl-24 md:pl-16 text-center lg:text-left">
                    <h1 className="font-mono text-4xl font-extrabold text-yellow-400 mb-6">Popular Blog Categories</h1>
                    <ul className="bg-gray-800 shadow-lg rounded-lg p-4">
                        {postCategory.map(item => (
                            <li key={item._id} className="py-3 border-b-2 border-gray-700 hover:bg-gray-700 px-3">
                                <h2 className="text-xl font-semibold text-blue-400">{item.title}</h2>
                                <p className="text-gray-300 mt-2 line-clamp-3">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
