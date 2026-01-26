import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import { FaInstagram , FaFacebook ,FaWhatsapp , FaBars ,FaTimes} from "react-icons/fa";

import Layout from "../Layout";

const scrollTosection=(id) =>
{
    const el=document.getElementById(id);
    el?.scrollIntoView({behavior:"smooth"});
};





export default function Header()
{
   const [ismenuopen, setmenuopen] = useState(false) 
    return(
        <header className="w-full fixed  z-50 ">
           <nav className="w-full h-[60px] md:h-[70px]  bg-white   flex items-center  shadow-md  " >
               <div className=" w-full flex items-center h-full text-base">
                   
                  <div className=" w-[40%] hidden md:flex h-[75px] " >
                        <ul className="w-full h-full flex justify-evenly items-center   ">
                            
                            <li onClick={()=> scrollTosection("Home")} className="hover:bg-gray-100 cursor-pointer px-3 py-6 hover:border-b-2 hover:border-blue-800">Home</li> 
                            <li onClick={()=> scrollTosection("Work")}   className="hover:bg-gray-100 cursor-pointer px-3 py-6 hover:border-b-2 hover:border-blue-800">Work</li>
                            <li onClick={()=> scrollTosection("About")} className="hover:bg-gray-100 cursor-pointer px-3 py-6 hover:border-b-2 hover:border-blue-800">About</li>
                            <li  onClick={()=> scrollTosection("Contact")} className="hover:bg-gray-100 cursor-pointer px-3 py-6 hover:border-b-2 hover:border-blue-800">Contact</li>
                        </ul>
                    </div> 
                    <div
                        onClick={() => setmenuopen(!ismenuopen)}
                        className="md:hidden text-2xl pl-4 cursor-pointer">
                        ☰
                    </div>


                    <div className={`fixed top-[0px] h-full  left-0 w-[50%] bg-white shadow-md md:hidden
                        transition-all duration-700
                        ${ismenuopen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 pointer-events-none"}
                        `}>

                        
                        <div className="w-full  h-[60px]   mt-[1.5px] cursor-pointer  rounded-lg flex justify-between 
                                         items-center  border-b-[1px] ">

                            <div
                                onClick={() => setmenuopen(!ismenuopen)}
                                className="md:hidden text-2xl pl-4 cursor-pointer ">
                                { ismenuopen? <FaTimes /> : <FaBars />}
                            </div>    
                            <div className="flex items-center">
                                <img className="w-10 md:w-14"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo8AAAJUCAYAAAB0acyXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOaElEQVR4nO3dz6vld
                            33H8fcJJ3TMRFMHbQnFIGMIjMGSRXWyaNpFqxtFBtqu7KJqda0bt6IuC/0DStSFGw0UJiF0kQayULAjKoI/gkNaEUqEIk5CTEwmc3MkaZeBPm/m3vmeH
                            48HnN3nnPOCgcuT+dzLdzUAAAdi8/R9d83MvbPbjlYXrv5oqS9fL/XFAAAL+POZeXx22/Mz84dLffltS30xAAC7RzwCAJCJRwAAMvEIAEAmHgEAyMQjAA
                            CZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BAAgE48AAGTiEQC
                            ATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgA
                            QCYeAQDIxCMAAJl4BAAgE48AAGTrpQcAANxCT8zMudltm6UHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP5aLT0AA
                            Pg/Vy4vvYA3c/HS0gu2ynoO1ZXLz83MXUvPAGAvfGcuXnrohD7rz2bmWyf0Wdycx2bm80uP2DaHG48AsJ3OzMz5pUfwhj9aesA2um3pAQAA7A7xCABAJ
                            h4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BAAgE48AAGTiEQCATDwCAJCJRwAAsnU/CgDAW7V5+r4vz8wnZrc9JR
                            4BAG6Nd83M+dltT7u2BgAgE48AAGTiEQCATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmX
                            gEACBbz5XLd83MR2a3/XouXnpq6REAAPtuPTP3zMwjs9u+MzMPLT0CAGDfubYGACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BADgWE
                            +YYVfdfmY+/vZzsw8e+82zS08AAALxuMP+6uxd8+i9H5x9sPreo0tPAAAC19YAAGTiEQCATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4h
                            EAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOt+FACAm/DwzDw1u+1X4hEA4BZYXbj6w5l5/bXTXFsDAJCJRwAAMvEIAEAmHgEAyMQjAA
                            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" alt="" />
                                <h1  className="text-base md:text-xl font-bold flex  flex-row"><span className="text-green-500">Muhammad</span> Talha</h1>
                            </div> 
                            <div
                                onClick={() => setmenuopen(!ismenuopen)}
                                className="md:hidden text-2xl pl-4 cursor-pointer">
                                { ismenuopen? <FaTimes /> : <FaBars />}
                            </div>
                        </div>
                        <ul className="flex border-b-[1px] flex-col text-center font-semibold">
                            <li
                            onClick={() => {scrollTosection("Home");  setmenuopen(false);}}
                            className="py-4 hover:bg-gray-100 cursor-pointer">Home
                            </li>
                            <li
                            onClick={() => {scrollTosection("Work");  setmenuopen(false);}}
                            className="py-4 hover:bg-gray-100 cursor-pointer">Work
                            </li>
                            <li
                            onClick={() => {scrollTosection("About");  setmenuopen(false);}}
                            className="py-4 hover:bg-gray-100 cursor-pointer">About
                            </li>
                            <li
                            onClick={() => {scrollTosection("Contact");  setmenuopen(false);}}
                            className="py-4 hover:bg-gray-100 cursor-pointer">Contact
                            </li>
                            
                        </ul>
                        <div >
                            <h3 className="p-5 text-sm font-semibold text-slate-700" >Follow me on:</h3>
                            <div className="w-full flex justify-center gap-6 pr-5 ">
                                <a className=" p-2 rounded-md "  href="https://www.facebook.com/talha.khan.74577" target="blank">
                                    <  FaFacebook className="text-xl text-blue-600 cursor-pointer" />
                                </a>
                                <a className=" p-2 rounded-md " href="https://www.instagram.com/talhakhan12345" target="blank">
                                    <  FaInstagram  className="text-xl text-pink-800 cursor-pointer" />
                                </a>
                                <a className=" p-2 rounded-md " href="https://wa.me/923419100706" target="blank">
                                    <FaWhatsapp className="text-xl text-green-600 cursor-pointer " />
                                </a>
                            </div>

                        </div>
                    </div>

                    
                
                    
                    <div className="w-full  md:w-[20%] h-[95%] mt-[1.5px] cursor-pointer  md:hover:bg-gray-200 rounded-lg flex justify-center md:justify-between 
                                    px-5 items-center  ">
                        <img className="w-10 md:w-14"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo8AAAJUCAYAAAB0acyXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOaElEQVR4nO3dz6vld
                        33H8fcJJ3TMRFMHbQnFIGMIjMGSRXWyaNpFqxtFBtqu7KJqda0bt6IuC/0DStSFGw0UJiF0kQayULAjKoI/gkNaEUqEIk5CTEwmc3MkaZeBPm/m3vmeH
                        48HnN3nnPOCgcuT+dzLdzUAAAdi8/R9d83MvbPbjlYXrv5oqS9fL/XFAAAL+POZeXx22/Mz84dLffltS30xAAC7RzwCAJCJRwAAMvEIAEAmHgEAyMQjAA
                        CZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BAAgE48AAGTiEQC
                        ATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgA
                        QCYeAQDIxCMAAJl4BAAgE48AAGTrpQcAANxCT8zMudltm6UHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP5aLT0AA
                        Pg/Vy4vvYA3c/HS0gu2ynoO1ZXLz83MXUvPAGAvfGcuXnrohD7rz2bmWyf0Wdycx2bm80uP2DaHG48AsJ3OzMz5pUfwhj9aesA2um3pAQAA7A7xCABAJ
                        h4BAMjEIwAAmXgEACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BAAgE48AAGTiEQCATDwCAJCJRwAAsnU/CgDAW7V5+r4vz8wnZrc9JR
                        4BAG6Nd83M+dltT7u2BgAgE48AAGTiEQCATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4hEAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmX
                        gEACBbz5XLd83MR2a3/XouXnpq6REAAPtuPTP3zMwjs9u+MzMPLT0CAGDfubYGACATjwAAZOIRAIBMPAIAkIlHAAAy8QgAQCYeAQDIxCMAAJl4BADgWE
                        +YYVfdfmY+/vZzsw8e+82zS08AAALxuMP+6uxd8+i9H5x9sPreo0tPAAAC19YAAGTiEQCATDwCAJCJRwAAMvEIAEAmHgEAyMQjAACZeAQAIBOPAABk4h
                        EAgEw8AgCQiUcAADLxCABAJh4BAMjEIwAAmXgEACATjwAAZOt+FACAm/DwzDw1u+1X4hEA4BZYXbj6w5l5/bXTXFsDAJCJRwAAMvEIAEAmHgEAyMQjAA
                        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" alt="" />
                        <h1  className="text-base md:text-xl font-bold flex flex-row"><span className="text-green-500">Muhammad</span> Talha</h1>

                    </div>
                    <div className="w-[40%] h-full hidden md:flex items-center ">
                        <div className="w-full flex justify-end gap-6 pr-5 ">
                        <a className=" hover:bg-gray-300 p-2 rounded-md "  href="https://www.facebook.com/talha.khan.74577" target="blank">
                            <  FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
                        </a>
                        <a className=" hover:bg-gray-300 p-2 rounded-md " href="https://www.instagram.com/talhakhan12345" target="blank">
                            <  FaInstagram  className="text-2xl text-pink-800 cursor-pointer" />
                        </a>
                        <a className=" hover:bg-gray-300 p-2 rounded-md " href="https://wa.me/923419100706" target="blank">
                            <FaWhatsapp className="text-2xl text-green-600 cursor-pointer " />
                        </a>
                        </div>
                        

                    </div>
               </div>
                
               
            </nav>
        </header>
        
            
        
        
            
        
    )
}