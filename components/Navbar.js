import Image from "next/image"
import Link from "next/link"


import React, { useRef , useState , useEffect } from 'react'


import Fade from 'react-reveal/Fade';

import { CgClose  } from 'react-icons/cg';
function Navbar({background , option}) {

    const navlinks = useRef(null)
    const [bord, setbord] = useState("block")
    const [navOpened, setnavOpened] = useState(false)
    const [display, setdisplay] = useState(false)
    const [navbackground, handlbackground] = useState(background)

    const handleClick = (e) => {
        
        e.preventDefault()
        const target = e.target.getAttribute('href')
        if(target=="#blogs"){
          
        const location = document.querySelector(target).offsetTop
        
    
        window.scrollTo({
          left: 0,
          top: location - 64,
        })

        setnavOpened(!navOpened)
       setdisplay(!display)
       
    }
        
      }
  
 

    const navLinks = ["Accueil", "Produits", "A propos", "Blog"];
    const links= ["/","apps_platforms","company","#blogs"]

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handlbackground("blue-900");
          } else { handlbackground(background);
              setbord('hidden') 
        }
        });
       
      }, []);

    const openNav = ()=>{
        navlinks.current.classList.toggle("open");
       setnavOpened(!navOpened)
       setdisplay(!display)
    }
    return (
        <div className="sticky  z-40 top-0" >
            

           
            <div className={`bg-${navbackground}   h-[70px] `}>
            
                <div className="container mx-auto ">
                    <nav className="flex md:justify-around justify-between lg:w-10/12  mx-auto   " >
                     
                        {navbackground=="blue-900"?(
                            
                            

                            <>
                            <div className=" relative left-5  md:left-22 ">
                             <Image src="https://i.ibb.co/yX3RWCB/newgen-Logo.png"   width={58} height={65} />
                              
                            </div>
                       
                             
                       </>
                           

                        ):(
                            <>
                            <Image src="https://i.ibb.co/tDKR0TV/newgen-Logo.png"   width={200} height={50} />
                           
                             
                            </>


                        )

                        }
                     
            
                       
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

                        
                        <ul className="nav-links py-5    text-white" ref={navlinks}>
                            {navOpened
                                ? navLinks.map((nl, index) => {
                                    return (
                                        <Link href={links[index]} key={index}  onClick={handleClick}  >
                                      
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
                                        <Link href={links[index]} key={index}  onClick={handleClick} >
                                        <li
                                            className="cursor-pointer ml-5 "
                                            >
                                           {nl}
                                        </li>

                                        </Link>
                                    );
                                })}

                           
                        </ul>
                    </nav>
                    <hr className={` relative  w-11/12 mx-auto  border-${navbackground}  `}/>
                </div>
            </div>

          
           
            
        </div>
    )
}

export default Navbar
