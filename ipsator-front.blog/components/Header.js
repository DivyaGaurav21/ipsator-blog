// components/Header.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Ipsator_Logo.svg';
import { useStytch, useStytchUser } from '@stytch/nextjs';

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
    const stych = useStytch();
    const { user } = useStytchUser();
    // console.log(user.providers.profile_picture_url);
    // console.log();



    return (
        <div className='sticky top-0'>
            <div className="mx-auto flex justify-between items-center px-6 py-4 bg-neutral-400">
                <h1 className='font-bold font-serif text-black text-3xl flex flex-row justify-center items-center'>
                    <Image src={Logo} width={140} height={100} />
                    <Link href="/">-BLOG</Link>
                </h1>

                <ul className="flex justify-between min-w-[500px]">
                    {navContent.map(navItem => (
                        <li key={navItem.id}>
                            <Link href={navItem.link}>
                                <span className={`font-bold text-black  ${navItem.id == 4 && 'signupbtn'} ${user && navItem.id == 4 && 'hidden'}`}
                                >{navItem.title}</span>
                            </Link>
                        </li>
                    ))}
                    {user && (
                        <li>
                            <Link href="/profile">
                                <span className="font-bold text-black flex flex-row gap-2">
                                    <h1 className='text-red-600 font-extrabold'>{user?.name?.first_name + " " + user?.name?.last_name}</h1>
                                    <img src={user?.providers[0]?.profile_picture_url} alt="user" className='w-[50px] h-[50px] mt-[-10px] rounded-full' />
                                </span>
                            </Link>
                        </li>
                    )
                    }
                </ul>

            </div>
        </div>
    );
};

export default Header;
