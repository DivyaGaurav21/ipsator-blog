// components/Header.js
'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Ipsator_Logo.svg';
import { useStytch, useStytchUser } from '@stytch/nextjs';
import { useEffect, useState } from 'react';
// import { FaBars } from 'react-icons/fa';

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

const Test = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // const stych = useStytch();
    const { user } = useStytchUser();

    return (
        <div className={`sticky top-0 z-10 bg-neutral-400 ${scrolled ? 'scrolled' : ''}`}>
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                    <Image src={Logo} width={140} height={100} alt="Logo" />
                    <Link href="/">-BLOG</Link>
                </div>

                <div className="hidden md:flex justify-between min-w-[500px]">
                    {navContent.map(navItem => (
                        <Link href={navItem.link} key={navItem.id}>
                            <div
                                className={`font-bold text-black text-xl ${navItem.id === 4 && 'signupbtn'} ${user && navItem.id === 4 && 'hidden'}`}
                                onClick={closeMobileMenu}
                            >
                                {navItem.title}
                            </div>
                        </Link>
                    ))}
                    {user && (
                        <Link href="/profile">
                            <div className="font-bold text-black flex items-center">
                                <span className="text-red-600 font-extrabold">{user?.name?.first_name + " " + user?.name?.last_name}</span>
                                <img src={user?.providers[0]?.profile_picture_url} alt="user" className="w-[50px] h-[50px] mt-[-10px] rounded-full border border-red-700 ml-2" />
                            </div>
                        </Link>
                    )}
                </div>

                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <i class="fa-solid fa-bars text-3xl"></i>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-800 text-center py-2">
                    {navContent.map(navItem => (
                        <Link href={navItem.link} key={navItem.id}>
                            <div
                                className={`block py-2 px-4 font-bold text-white text-xl ${navItem.id === 4 && 'signupbtn'} ${user && navItem.id === 4 && 'hidden'}`}
                                onClick={closeMobileMenu}
                            >
                                {navItem.title}
                            </div>
                        </Link>
                    ))}
                    {user && (
                        <Link href="/profile">
                            <div className="block py-2 px-4 font-bold text-black">
                                <span className="text-red-600 font-extrabold">{user?.name?.first_name + " " + user?.name?.last_name}</span>
                                <img src={user?.providers[0]?.profile_picture_url} alt="user" className="w-[50px] h-[50px] mt-[-10px] rounded-full border border-red-700 ml-2" />
                            </div>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default Test;
