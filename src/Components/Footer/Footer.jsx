import React from "react";
import { FaInstagram , FaFacebook ,FaTwitter ,FaWhatsapp } from "react-icons/fa";

export default function Footer()
{
    return(
        <div  className="w-full h-28 bg-white shadow-2xl shadow-black mt-16 flex flex-col justify-center items-center">
            <div className="w-full h-10 flex  gap-6 mt-3 justify-center items-center">
                <a className=" hover:bg-gray-300  rounded-md " href="https://www.facebook.com/talha.khan.74577" target="blank" >
                    <FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
                </a>
                <a className=" hover:bg-gray-300  rounded-md " href="https://www.instagram.com/talhakhan12345" target="blank">
                    <FaInstagram  className="text-2xl text-pink-800 cursor-pointer" />
                </a>
                <a className=" hover:bg-gray-300  rounded-md "  href="https://wa.me/923419100706" target="blank">
                    <FaWhatsapp className="text-2xl text-green-600 cursor-pointer " />
                </a>
            </div>
            <p className="text-gray-500 mb-4">Powered by Muhammad Talha</p>

        </div>
    )
}