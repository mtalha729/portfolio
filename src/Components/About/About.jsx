import React from "react";
import { FaInstagram , FaFacebook ,FaTwitter ,FaWhatsapp } from "react-icons/fa";

export default function About()
{
    return(
        <div id="About" className="w-[100%] h-auto flex pt-10 flex-col md:flex-row ">
            <div className="w-[100%] h-auto flex justify-center md:justify-between bg-gray-100  flex-col md:flex-row">
                <div className=" w-full flex justify-center md:justify-start   md:w-[40%] h-auto">
                    <img className="w-56 mt-10 md:mt-0 md:w-96 rounded-full md:rounded-none  " src="/images/Talha3.png" alt="" />

                </div>
                <div className="w-full md:w-[60%] h-auto flex  flex-col m-4 ">
                    
                    <h1 className="md:mt-[4rem] mt-3  flex justify-center md:justify-start text-3xl  md:text-5xl font-extrabold">MUHAMMAD TALHA</h1>
                    
                    <h3 className="mt-5 text-xl md:text-2xl font-bold text-pink-600 flex justify-center md:justify-start">WEB DEVELOPER</h3>
                    <div className="mt-2 flex justify-start md:justify-center font-sans md:text-lg  text-justify text-gray-900 p-2 md:p-0">percentage labels to skill bars Better spacing and transitionsAdded borders to sections for better definition ImprovedAdded borders to sections for better definition Improved text contrast calculations Added percentage labels to skill bars Better text contrast calculations AddAdded percentage labels to skill bars Better spacing and transitionsAdded borders to sections for better definition ImprovedAdded borders to sections for better definition Improved text contrast calculations Added percentage labels to skill bars Better text contrast calculations Add</div>
                    <div className="w-full   flex items-center ">
                        <div className="w-full flex  gap-6 mt-8 justify-center md:justify-start ">
                            <a className=" hover:bg-gray-300  rounded-md " href="https://www.facebook.com/talha.khan.74577" target="blank" >
                                <FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
                            </a>
                            <a className=" hover:bg-gray-300  rounded-md " href="https://www.instagram.com/talhakhan12345" target="blank">
                                <FaInstagram  className="text-2xl text-pink-800 cursor-pointer" />
                            </a>
                            <a className=" hover:bg-gray-300  rounded-md " href="https://wa.me/923419100706" target="blank">
                                <FaWhatsapp className="text-2xl text-green-600 cursor-pointer " />
                            </a>
                        </div>
                                            
                    
                    </div>
                    

                </div>

            </div>

        </div>
    )
}