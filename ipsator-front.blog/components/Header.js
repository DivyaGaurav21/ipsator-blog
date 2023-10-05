// components/Header.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Ipsator_Logo.svg';
import Styles from '../app/styles/Header.module.css'
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
        <div className={Styles.navbar}>
            <div className={`${Styles.navdiv}  ${scrolled ? 'scrolled' : ''}`}>
                <h1 className={Styles.logoheading}>
                    <Image src={Logo} width={140} height={100} alt='ipsator_logo' />
                    <Link href="/">-BLOG</Link>
                </h1>

                <ul className={Styles.navul}>
                    {navContent.map(navItem => (
                        <li key={navItem.id}>
                            <Link href={navItem.link}>
                                <span className={`${Styles.navitem} ${navItem.id == 4 && 'signupbtn'} ${user && navItem.id == 4 && 'hidden'} `}
                                >{navItem.title}</span>
                            </Link>
                        </li>
                    ))}
                    {user && (
                        <li>
                            <Link href="/profile">
                                <span className={Styles.navname}>
                                    <h1 className='text-red-600 font-extrabold'>{user?.name?.first_name + " " + user?.name?.last_name}</h1>
                                    <img src={user?.providers[0]?.profile_picture_url} alt="user" className={Styles.userimg} />
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
                <ul className={Styles.navulmobile}>
                    {navContent.map(navItem => (
                        <Link href={navItem.link} key={navItem.id}>
                            <li
                                className={`${Styles.navlist} ${navItem.id === 4 && 'signupbtn'} ${user && navItem.id === 4 && 'hidden'}`}
                                onClick={closeMobileMenu}
                            >
                                {navItem.title}
                            </li>
                        </Link>
                    ))}
                    {user && (
                        <Link href="/profile">
                            <span className={Styles.navspann}>
                                <h1 className={Styles.username}>{user?.name?.first_name + " " + user?.name?.last_name}</h1>
                                <img src={user?.providers[0]?.profile_picture_url} alt="user" className={Styles.userimgg} />
                            </span>
                        </Link>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Header;
