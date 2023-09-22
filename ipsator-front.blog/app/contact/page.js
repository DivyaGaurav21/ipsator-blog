'use client'
import React, { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSend = () => {
        const { name, email, phone, message } = formData;

        // Replace '1234567890' with the recipient's phone number in international format.
        const phoneNumber = "9334802030";

        const whatsappMessage = `Hi, my name is ${name}. My email is ${email}, and my phone number is ${phone}. I wanted to say: ${message}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappLink, "_blank");
    };

    return (
        <div className="h-auto md:h-[80vh]">
            <h1 className="text-center text-4xl mb-8 font-bold">Contact Us</h1>
            <div className="flex flex-col md:flex-row justify-center md:space-y-0 gap-2 md:w-[85%] mx-auto">
                {/* Box 1 */}
                <form className="flex flex-col items-center justify-center gap-6 w-full md:w-[40%] bg-neutral-500 rounded-2xl p-3">
                    {/* Your Name and Email */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border-2 p-2 rounded w-full md:w-1/2 outline-none"
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border-2 p-2 rounded w-full md:w-1/2 outline-none"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border-2 p-2 rounded w-full outline-none"
                        onChange={handleChange}
                        value={formData.phone}
                        name="phone"
                        required
                    />

                    {/* Textarea */}
                    <textarea
                        placeholder="Your Message"
                        className="border-2 p-2 rounded w-full h-[100px] mb-4 outline-none"
                        required
                        onChange={handleChange}
                        value={formData.message}
                        name="message"
                    />

                    {/* Button */}
                    <button
                        className="w-full bg-slate-800 py-3 rounded-3xl font-extrabold text-white"
                        onClick={handleSend}
                    >
                        Submit
                    </button>
                </form>

                {/* Box 2 */}
                <div className="pl-24 py-10 w-full md:w-[60%] bg-neutral-500 shadow-lg rounded-2xl md:ml-4">
                    <div className="mb-4">
                        <i className="fa-regular fa-address-book text-black text-2xl rounded-full bg-red-500 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Address</h1>
                        <p className="text-white">
                            Headquarters & Engineering Centre:- Hosur Rd, Santhosapuram,
                            Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560095
                            (INDIA)
                        </p>
                    </div>
                    <div className="mb-4">
                        <i className="fa-regular fa-envelope text-black text-2xl rounded-full bg-red-500 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Email ID</h1>
                        <p className="text-white">info@ipsator.com</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone text-black text-2xl rounded-full bg-red-500 p-3"></i>
                        <h1 className="text-xl font-semibold mb-2">Phone</h1>
                        <p className="text-white">+91 XXX XXX XXXX</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
