// 'use client'
import React from 'react';
import Logo from './Ipsator_Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPost } from '@/sanity/sanityIntegration';
import Styles from '../app/styles/Footer.module.css'

const social_link = [
    {
        id: 1,
        url: '/',
        linktext: 'Home'
    },
    {
        id: 2,
        url: '/contact',
        linktext: 'Service'
    },
    {
        id: 3,
        url: 'https://ipsator.com/',
        linktext: 'Case Studies'
    },
    {
        id: 4,
        url: '/about',
        linktext: 'About Us'
    },
    {
        id: 5,
        url: '/',
        linktext: 'Blog'
    },
    {
        id: 6,
        url: '/contact',
        linktext: 'Contact Us'
    },
    {
        id: 7,
        url: '/https://ipsator.com/',
        linktext: 'Terms & Conditions'
    },
]


const Footer = async () => {
    let blogPosts = await getAllBlogPost();
    blogPosts = blogPosts.slice(0, 5);

    return (
        <footer className={Styles.footerdiv}>
            <div className={Styles.footer}>
                <div className={Styles.footertop}>
                    <Image src={Logo} alt="Company_Logo" width={200} height={100} />
                    {/* <h1 className='text-3xl font-bold text-white'>IPSATOR</h1> */}
                    <div className={Styles.social}>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                </div>

                <div className={Styles.address}>
                    <div className={Styles.addressdiv}>
                        <div className="flex flex-col items-center">
                            <div>
                                <h3 className="text-lg font-semibold">Ipsator Analystics Pvt Ltd.</h3>
                                <p className='font-serif'><i className="fa-solid fa-location-crosshairs"></i> &nbsp;
                                    <span className='font-extrabold'>
                                        Bengaluru Office
                                    </span>
                                    <br />
                                    <i>
                                        Headquarters & Engineering Centre:- Hosur Rd, Santhosapuram, Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560095 (INDIA)
                                    </i>
                                </p>
                                <hr />
                                <p className='font-serif'><i className="fa-solid fa-location-crosshairs"></i> &nbsp;
                                    <span className='font-extrabold'>Noida Office</span>
                                    <br />
                                    <i> 91springboard, C-2, Sector-1, Noida - 201301</i>
                                </p>
                                <br />
                                <p className="text-gray-300"><i className="fa-regular fa-envelope"></i> Email:nfo@ipsator.com</p>
                                <p className="text-gray-300"><i className="fa-solid fa-address-book"></i> Contact:+91 XXX XXX XXXX</p>
                            </div>
                        </div>
                    </div>


                    <div className={Styles.footerlink}>
                        <h3 className={Styles.linkheading}>Quick Links</h3>
                        <ul className={Styles.ful}>
                            {
                                social_link.map(link =>
                                    <li key={link.id}>
                                        <Link href={link.url} className={Styles.linkstyle}>{link.linktext}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="lg:w-1/3 font-serif">
                        <h3 className="text-lg font-semibold mb-6">Latest Blog Posts</h3>
                        <ul className="list-disc mb-3">
                            {
                                blogPosts.map(post =>
                                    <li key={post._id} className={Styles.footerpara}>{post.body[0].children[0].text}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <hr />

                <p className={Styles.bottom}>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;