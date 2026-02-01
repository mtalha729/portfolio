import React, { useState } from "react";
import { useEffect } from "react";
import Model from "../Model";
import { FaArrowLeft } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

<img src="/images/newui.png"/>

export default function Work()
{
    const [showmodal, setshowmodal] = useState(false)
    const [SelectedModel, setSelectedModel] = useState(null)
    const [ActiveCategory, setActiveCategory]= useState("All")

    useEffect(()=> {
        document.body.style.overflow = SelectedModel? "hidden" : "auto";
            
    }, [SelectedModel])
    const projects=[
        {id:1 , title: "React Basic Project", description:"Password Generaor",                         category: "Other",    Image: "/images/cardimage1.png",  imgClass:" w-[50%] " , live:"https://password-generator-8av5.vercel.app/"},
        {id:2 , title: "New UI",          description:"New Ui New UI New UI New UI New UI New UI New UI", category: "Amazon",   Image: "/images/newui.png" ,  gallery:["/images/hero1.png", "/images/Talha.png" , "/images/newui.png"]},
        {id:3,  title: "Talha Developments",description:"Modern & Minimalistic Modern & Minimalistic Modern & Minimalistic Modern & Minimalistic",                                               category: "Other",    Image: "/images/cardimage1.png", imgClass:" w-[50%] " },
        {id:4 , title: "Modern & Minimalistic",description:"Modern & Minimalistic Modern & Minimalistic Modern & Minimalistic Modern & Minimalistic Modern & Minimalistic",                      category: "UI/UX" ,   Image: "/images/cardimage2.png" },
        {id:5 , title: "New Projects",         description:"Hey! 👋 How are you doing today?",      category: "Social Media", Image:"/images/cardimage5.png" },
        {id:6 , title: "Web Developemnts",      description:"This is for Web Developers",           category: "Amazon" ,   Image:"/images/cardimage6.png"},
    ];
    const categories=["All", "Amazon" , "Social Media" , "UI/UX" ]
    const filteredprojects= ActiveCategory==="All"?projects:projects.filter((p)=>p.category===ActiveCategory)
    
    return(
        <div  className="w-full h-auto  mt-20 pt-20 ">
            
            <div className="w-full h-auto flex flex-wrap justify-center gap-4  md:font-bold text-sm md:text-xl text-gray-950">
                 <button onClick={()=> setActiveCategory("All")} className={`px-2 md:px-4 py-1 md:py-2  rounded-3xl border-[1px] border-gray-400 cursor-pointer 
                    ${ActiveCategory==="All"? "bg-blue-600 text-white":"bg-gray-200"}`}>All Projects  <span className="px-2 font-normal  rounded-lg bg-gray-300/40 text-[15px]">6</span></button>
                 <button onClick={()=> setActiveCategory("Amazon")} className={`px-2 md:px-4 py-1 md:py-2   rounded-3xl border-[1px] border-gray-400 cursor-pointer 
                    ${ActiveCategory==="Amazon"?"bg-blue-600 text-white":"bg-gray-200"}`}>Amazon <span className="px-2 font-normal  rounded-lg bg-gray-300/40 text-[15px]">2</span></button>
                 <button onClick={()=> setActiveCategory("Social Media")} className={`px-2 md:px-4 py-1 md:py-2  rounded-3xl border-[1px] border-gray-400 cursor-pointer
                    ${ActiveCategory==="Social Media"?"bg-blue-600 text-white":"bg-gray-200"}`}>Social Media <span className="px-2 font-normal  rounded-lg bg-gray-300/40 text-[15px]">1</span></button>
                 <button  onClick={()=> setActiveCategory("UI/UX")}className={`px-2 md:px-4 py-1 md:py-2  rounded-3xl border-[1px] border-gray-400 cursor-pointer
                    ${ActiveCategory==="UI/UX"?"bg-blue-600 text-white":"bg-gray-200"}`}>UI/UX <span className="px-2 font-normal  rounded-lg bg-gray-300/40 text-[15px]">1</span></button>
                 <button onClick={()=> setActiveCategory("Other")} className={`px-2 md:px-4 py-1 md:py-2  rounded-3xl border-[1px] border-gray-400 cursor-pointer
                    ${ActiveCategory==="Other"?"bg-blue-600 text-white":"bg-gray-200"}`}>Other <span className="px-2 font-normal  rounded-lg bg-gray-300/40 text-[15px]">2</span></button>

            </div>

            

            <div className="w-full pt-20  flex flex-col md:flex-row flex-wrap justify-center gap-6">
                { filteredprojects.map((project)=>(
                        <div
                           key={project.id}
                           onClick={() => setSelectedModel(project)}
                           className="group relative  md:w-[30%] w-full h-80 rounded-lg border-[1px] cursor-pointer transition-transform duration-500 hover:scale-105 overflow-hidden flex justify-center items-center bg-gray-200">
                           <img className={` transition-transform duration-700 ${project.imgClass}`} src={project.Image}/>
                           <div className=" group absolute inset-0 bg-black/60  opacity-0 
                                            group-hover:opacity-100 transition
                                            flex flex-col items-center justify-center text-center">
                            <h2 className="text-3xl text-white font-bold text-center transition-transform duration-700">
                                {project.title}
                            </h2>
                            <p className="text-xl text-white  p-5 text-center">
                                {project.category}
                            </p>
                            

                           </div>
                           
                           
                        </div>
                        


                    ))}
                {SelectedModel && (
                                <div  className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition">
                                    <div className="w-full fixed top-0 h-[100px] border-b flex justify-between           items-center px-10 bg-white z-50">
                                        <div className="flex items-center gap-6 text-xl" >
                                         
                                         <button onClick={(project) => setSelectedModel(!SelectedModel)}><IoArrowBackOutline/> </button>
                                        <h1 className="text-xl md:text-3xl text-gray-900 font-semibold md:font-bold">{SelectedModel.title}</h1>   
                                        </div>
                                        
                                        
                                        <div>
                                            <button src="www.youtube.com" className="md:mr-3 mr-1 md:px-4 px-2  py-1 md:py-2 bg-blue-700 rounded-xl text-white md:text-lg text-base font-semibold">
                                          Live Demo
                                        </button>
                                        <button onClick={(project) => setSelectedModel(!SelectedModel)} className="md:px-4 md:py-2 px-2 py-1 bg-gray-500 rounded-xl text-white md:text-lg text-base font-semibold" >
                                            Close
                                        </button>
                                        </div>
                                        
                                    </div>
                                    <div className="w-full h-screen flex-1 mt-[100px]">
                                     {/* mt-[100px] to offset fixed header height */}
                                         <div className="w-full h-full bg-gray-200 p-10 flex flex-col justify-center        items-center">
                                         
                                         <a className="p-6 bg-slate-600 rounded-lg text-white" href={SelectedModel.live}> Click To Vist {SelectedModel.description}</a>
                                         </div>
                                    </div>
                                </div>
                            )}
            </div>
            
            
        </div>
    )
}