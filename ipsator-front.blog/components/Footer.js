// 'use client'
import React from 'react';
import Logo from './Ipsator_Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPost } from '@/sanity/sanityIntegration';
import { sliceSentenceToWords } from '@/app/page';


const Footer = async () => {
    let blogPosts = await getAllBlogPost();
    blogPosts = blogPosts.slice(0, 5);

    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="container mx-auto">
                <div className='flex justify-between py-5 flex-col md:flex-row px-4 rounded-2xl bg-slate-100'>
                    <Image src={Logo} alt="Company_Logo" width={200} height={100} />
                    <div className='min-w-[250px] flex flex-row text-red-600 justify-end gap-3 text-3xl'>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between px-6 my-7">
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
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


                    <div className="lg:w-1/3 mb-8 lg:mb-0 pl-0 xl:pl-16 font-serif flex flex-col gap-2">
                        <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
                        <ul className="list-disc leading-7 pl-10">
                            <li><Link href="/" className="text-gray-300 hover:text-yellow-400">Home</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400">Service</Link></li>
                            <li><Link href="https://ipsator.com/" className="text-gray-300 hover:text-yellow-400">Case Studies</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link></li>
                            <li><Link href="/" className="text-gray-300 hover:text-yellow-400">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400">Contact Us</Link></li>
                            <li><Link href="/https://ipsator.com/" className="text-gray-300 hover:text-yellow-400">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-1/3 font-serif">
                        <h3 className="text-lg font-semibold mb-6">Latest Blog Posts</h3>
                        <ul className="list-disc mb-3">
                            {
                                blogPosts.map(post =>
                                    <li key={post._id} className='hover:text-yellow-400 text-sm leading-6'>{sliceSentenceToWords(post.body[0].children[0].text, 12)}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <hr />

                <p className="text-sm mt-6 text-center">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;