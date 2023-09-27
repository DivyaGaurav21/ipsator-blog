import React from 'react'

const About = () => {
    return (
        <div className="bg-gray-200 py-8">
            <div className="container mx-auto p-4">
                <div className="bg-slate-900 text-white text-center py-4 rounded-md mb-4">
                    <h1 className="text-3xl font-semibold">We are Ipsator</h1>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mb-4">
                    <h2 className="text-yellow-600 text-lg font-semibold mb-4">Diverse & talented people, effective and reliable outcomes</h2>
                    <p className='text-red-900 font-mono'>
                        Ipsator Analytics Private Limited is a DIPP recognized technology startup. We have been appointed by IRCTC for a project of national importance. It has built a sophisticated marketplace platform that powers the IRCTC eCatering ecosystem.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mb-4">
                    <h2 className="text-yellow-600 text-lg font-semibold mb-4">What we do</h2>
                    <p className='text-red-900 font-sans'>
                        Think big, work fast, make 10x more than ponder. We handle challenges in data science and experimentation, machine learning runtimes, complex systems integration, large data set analysis, low-latency real-time systems, and operational issues. We are passionate about building products that are not just useful but also delightful to use. We have delivered platforms built in Java, Kotlin, Python, NodeJS, Angular, React, C, C++, and more.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-yellow-600 text-lg font-semibold mb-4">Who we work with</h2>
                    <p className='text-red-900 font-mono'>
                        If you have a vision, we have the tools and tricks to make it real. We have worked with a range of companies from small startups to big giants. Few of them are IRCTC, Wipro GE Healthcare, Dominos, Faasos, Razorpay, and PayTM.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About