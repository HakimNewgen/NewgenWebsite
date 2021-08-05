import Image from "next/image"
import Link from "next/link"


import React, { useRef , useState } from 'react'


import Fade from 'react-reveal/Fade';

import { CgClose  } from 'react-icons/cg';
function Navbar({background , option}) {

    const navlinks = useRef(null)

    const [navOpened, setnavOpened] = useState(false)
    const [display, setdisplay] = useState(false)
 

    const navLinks = ["Acceuil", "Produits", "A propos", "Blog"];
    const links= ["/","apps_platforms","company","/"]

    const openNav = ()=>{
        navlinks.current.classList.toggle("open");
       setnavOpened(!navOpened)
       setdisplay(!display)
    }
    return (
        <div>
            

           
            <div className={`bg-${background} `}>
            
                <div className="container mx-auto ">
                    <nav className="flex justify-around w-8/12 mx-auto   " >
                        <Image src="https://i.ibb.co/tDKR0TV/newgen-Logo.png"   width={200} height={50} />
                       
                        <div className="hamburger" onClick={openNav}>
                          
                            
                            <div >
                            { display?(
                                    <CgClose className=" md:hidden text-4xl text-white " />
                            ):(
                                <>
                                            <div className={`  line`}></div>
                                            <div className={`  line`}></div>
                                            <div className={`  line`}></div>
                                </>
                            )
                                   
                            }
                               

                            </div>
                        </div>

                        
                        <ul className="nav-links py-5 text-white" ref={navlinks}>
                            {navOpened
                                ? navLinks.map((nl, index) => {
                                    return (
                                        <Link href={links[index]} key={index}>
                                      
                                            <li
                                                className="cursor-pointer   text-2xl hover: transition 10ms hover:text-3xl"
                                            >

                                                <Fade left duration={2000} delay={index * 500} >

                                                    {nl}
                                                </Fade>

                                            </li>


                                            </Link>
                                    
                                      
                                    );
                                })
                                : navLinks.map((nl, index) => {
                                    return (
                                        <Link href={links[index]} key={index} >
                                        <li
                                            className="cursor-pointer "
                                        >
                                           {nl}
                                        </li>

                                        </Link>
                                    );
                                })}

                           
                        </ul>
                    </nav>
                </div>
            </div>

          
            <hr className=" w-9/12 mx-auto "/>
            
        </div>
    )
}

export default Navbar
