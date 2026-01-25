import React from "react";
import { FaInstagram , FaFacebook ,FaTwitter ,FaWhatsapp } from "react-icons/fa";

export default function Contact()
{
    return(
        <div id="Contact" className="w-full  flex justify-center pt-10">
            <div className="w-[85%]  ">
                <h1 className="text-center text-3xl font-semibold my-10">Contact</h1>
                <form className="w-full  flex flex-col items-center">

                    <div className="w-full md:w-[55%] flex flex-col items-center md:items-start">
                        <label className="text-sm mb-2"><span className="text-red-800 mr-1">*</span>Name</label>
                        <input  className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-600
                                          rounded-lg mb-4 text-sm" placeholder="Your Name..." type="text" />
                    </div>
                    <div className="w-full md:w-[55%] flex flex-col items-center md:items-start">
                        <label className="text-sm mb-2"><span className="text-red-800 mr-1">*</span>Email</label>
                        <input  className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-600
                                          rounded-lg mb-4 text-sm" placeholder="Your Email..." type="email" />
                    </div>

                    <div className="w-full md:w-[55%] flex flex-col items-center md:items-start">
                        <label className="text-sm mb-2"><span className="text-red-800 mr-1">*</span>Message</label>
                        <textarea placeholder="Your Message..." className="w-full resize-y min-h-24 p-2 border-[1px] border-gray-300 hover:border-gray-600
                                          rounded-lg mb-4 text-sm"></textarea>
                    </div>

                    <div className="w-full md:w-[55%] flex flex-col items-center  md:items-start">
                        <label className="text-sm mb-2"><span className="text-red-800 mr-1">*</span>Other Field</label>
                        <input  className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-600
                                          rounded-lg mb-4 text-sm" placeholder="Optional Field..." type="text" />
                    </div>

                    <button type="submit" className="w-[40%] md:w-64 mt-3 border-[1px ] py-3 rounded-xl border-b-2 bg-gray-500 border-gray-400  text-white ">Submit</button>



                    


                    
                </form>

            </div>

        </div>
    )
}