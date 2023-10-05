import { getAllCateogary } from '@/sanity/sanityIntegration';
import Styles from '../app/styles/Hero.module.css'

const Hero = async () => {
    // fetch sanity backend (all post cateogary) 
    const postCategory = await getAllCateogary();

    return (
        <div className={Styles.hero}>
            <div className={Styles.herodiv}>
                <div className={Styles.heroimgdiv}>
                    <img
                        className="object-cover w-[95%] m-auto md:w-full rounded-lg shadow-lg"
                        alt="hero_image"
                        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                </div>
                <div className={Styles.herocategory}>
                    <h1 className={Styles.heroheading}>Popular Blog Categories</h1>
                    <ul className={Styles.heroul}>
                        {postCategory.map(item => (
                            <li key={item._id} className={Styles.heroli}>
                                <h2 className={Styles.liheading}>{item.title}</h2>
                                <p className={Styles.lipara}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
