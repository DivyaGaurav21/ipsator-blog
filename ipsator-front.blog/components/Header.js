// components/Header.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Ipsator_Logo.svg';
import { useStytchUser } from '@stytch/nextjs';
import { useEffect, useState } from 'react';

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
        link: "/login"
    }
];

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // const stych = useStytch();
    const { user } = useStytchUser();

    // Function to handle the scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu when div link is clicked
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Add an event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // console.log(user.providers.profile_picture_url);
    // console.log();



    return (
        <div className="sticky top-0 z-10">
            <div className={`mx-auto flex justify-between items-center px-6 py-4 bg-yellow-300  ${scrolled ? 'scrolled' : ''}`}>
                <h1 className='font-bold font-serif text-black text-3xl flex flex-row justify-center items-center'>
                    <Image src={Logo} width={140} height={100} alt='ipsator_logo' />
                    <Link href="/">-BLOG</Link>
                </h1>

                <ul className="hidden md:flex justify-between min-w-[500px]">
                    {navContent.map(navItem => (
                        <li key={navItem.id}>
                            <Link href={navItem.link}>
                                <span className={`font-bold text-black text-xl ${navItem.id == 4 && 'signupbtn'} ${user && navItem.id == 4 && 'hidden'}`}
                                >{navItem.title}</span>
                            </Link>
                        </li>
                    ))}
                    {user && (
                        <li>
                            <Link href="/profile">
                                <span className="font-bold text-black flex flex-row gap-2">
                                    <h1 className='text-red-600 font-extrabold'>{user?.name?.first_name + " " + user?.name?.last_name}</h1>
                                    <img src={user?.providers[0]?.profile_picture_url} alt="user" className='w-[50px] h-[50px] mt-[-10px] rounded-full border border-red-700' />
                                </span>
                            </Link>
                        </li>
                    )
                    }
                </ul>

                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <i className="fa-solid fa-xmark text-3xl"></i> : <i className="fa-solid fa-bars text-3xl"></i>}
                </div>

            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <ul className="md:hidden bg-slate-800 text-center py-2">
                    {navContent.map(navItem => (
                        <Link href={navItem.link} key={navItem.id}>
                            <li
                                className={`block py-2 px-4 font-bold text-white text-xl ${navItem.id === 4 && 'signupbtn'} ${user && navItem.id === 4 && 'hidden'}`}
                                onClick={closeMobileMenu}
                            >
                                {navItem.title}
                            </li>
                        </Link>
                    ))}
                    {user && (
                        <Link href="/profile">
                            <span className="block py-2 px-4 font-bold text-black">
                                <h1 className="text-red-600 font-extrabold">{user?.name?.first_name + " " + user?.name?.last_name}</h1>
                                <img src={user?.providers[0]?.profile_picture_url} alt="user" className="w-[50px] h-[50px] mt-[-10px] rounded-full border border-red-700 ml-2" />
                            </span>
                        </Link>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Header;
