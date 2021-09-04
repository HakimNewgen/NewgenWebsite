import React from 'react'
import {IoDocumentsSharp} from 'react-icons/io5'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {IoRocketSharp} from 'react-icons/io5'
import {RiRecycleFill} from 'react-icons/ri'

function Process() {
    return (
        <div>
        <div className="m-28 w-full"  >
        
           <ul className="progress  md:flex mx-auto w-10/12 text-center relative right-16  mb:right-14 justify-between " >
          
             <li className="grid place-items-center   w-52 mb-20 md:mb-0">
             <hr className=" hidden lg:block border-4 border-blue-900 lg:w-[190px] md:w-[15px] relative top-10 md:left-[110px]  lg:left-[132px]  " />
              
               <div className="cont border-4 border-blue-900 rounded-full w-20 h-20 grid place-items-center  ">
               <IoDocumentsSharp className="icon text-blue-900 text-3xl mt-5 " /> <br />
               
               </div>
                <p className=" text-xl text-blue-800 mt-5 " >Content Strategy</p>

          

               
               
             </li>
            
             <li className=" grid place-items-center  w-52  mb-20 md:mb-0">
             <hr className="  hidden lg:block border-4 border-blue-900 lg:w-[190px] md:w-[145px] relative top-10 md:left-[110px]  lg:left-[132px] " />
              
             <div className="border-4 border-blue-900 rounded-full w-20 h-20 grid place-items-center  ">
             <FaPencilAlt className=" text-blue-900 text-3xl mt-5  "  /><br />
                 
               </div>

               <p className=" text-xl text-blue-800 mt-5 ">Design</p>
             </li>
            


             <li className=" grid place-items-center  w-52  mb-20 md:mb-0">
             <hr className="  hidden lg:block border-4 border-blue-900 lg:w-[190px] md:w-[145px] relative top-10 md:left-[110px]  lg:left-[132px] " />
              
              
               <div className="border-4 border-blue-900 rounded-full w-20 h-20 grid place-items-center  ">
               <FaTools  className=" text-blue-900 text-3xl mt-5  "/><br />
                 
               </div>
               <p className=" text-xl text-blue-800 mt-5 ">Develop</p>
               
             </li>
             <li className="grid place-items-center  w-52  mb-20 md:mb-0">
             <hr className="  hidden lg:block border-4 border-blue-900 lg:w-[190px] md:w-[145px] relative top-10 md:left-[110px]  lg:left-[132px]  " />
              
              <div className="border-4 border-blue-900 rounded-full w-20 h-20 grid place-items-center  ">
              <IoRocketSharp className=" text-blue-900 text-3xl mt-5 " /><br />
                 
               </div>
               <p className=" text-xl text-blue-800 mt-5 ">Launch</p>
             </li>


             <li className="grid place-items-center  w-52  mb-20 md:mb-0">
           
             
              <div className="border-4 border-blue-900 rounded-full w-20 h-20 grid place-items-center  ">
              <RiRecycleFill className=" text-blue-900 text-3xl mt-5 " /><br />
                 
               </div>
               <p className=" text-xl text-blue-800 mt-5 ">Update</p>
             </li>

           </ul>
            
        </div>
            
        </div>
    )
}

export default Process
