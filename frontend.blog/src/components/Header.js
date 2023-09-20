// components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Ipsator_Logo.svg';

const navContent = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "About",
        link: "/about"
    },
    {
        id: 3,
        title: "Contact",
        link: "/contact"
    },
    {
        id: 4,
        title: "Sign In",
        link: "/signin"
    },
    {
        id: 5,
        title: "Sign Up",
        link: "/signup"
    }
];

const Header = () => {
    return (
        <nav className='sticky top-0'>
            <div className="mx-auto flex justify-between items-center px-6 py-4 bg-neutral-400">
                <h1 className='font-bold font-serif text-black text-3xl flex flex-row justify-center items-center'>
                    <Image src={Logo} width={140} height={100} />
                    <Link href="/">-BLOG</Link>
                </h1>

                <ul className="flex gap-6">
                    {navContent.map(navItem => (
                        <li key={navItem.id}>
                            <Link href={navItem.link}>
                                <span className={`font-bold text-black ${navItem.id === 5 && 'signupbtn'} ${navItem.id == 4 && 'signinbtn'}`}
                                >{navItem.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
