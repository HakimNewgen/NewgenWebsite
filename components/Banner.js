
import {useState} from "react"
import Navbar from "./Navbar"

import Rotate from 'react-reveal/Rotate';
import Link from 'next/link'
import Modal from 'react-modal';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineCloseCircle} from 'react-icons/ai';


import Bounce from 'react-reveal/Bounce';

import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

function Banner({source , size , text , text1, font , navbar , color , height , clip }) {
    console.log(source)
     console.log(font)
    const [modalIsOpen1, setIsOpen1] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);

    const [route, setroutes] = useState("");


    const [bg1, setbg1] = useState("")
    const [bg2, setbg2] = useState("")

    const [txt1, settext1] = useState("text-gray-500")
    const [txt2, settext2] = useState("text-gray-500")

    
    const changeColor1 = () => {
        setbg1('bg-blue-900')
        settext1('text-white')
        setbg2('')
        settext2('text-gray-500')

        setroutes('/devis_web')

        


    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        setroutes('/devis_mobile')

    }


    const openModal1 = ()=>{
        setIsOpen1(true)
    }


    const openModal2 = () => {
        setIsOpen2(true)
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            height:'400px',
            width: '90%',
            transform: 'translate(-50%, -50%)',
            borderRadius :'40px'
        },
    };


    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
    
        window.scrollTo({
          left: 0,
          top: location - 64,
        })
      }
    return (

     
        <div className={`${clip}  relative bottom-20  bg-no-repeat ${height} w-screen     bg-opacity-0 mx-auto`}
            style={{ background: `url("${source}") `, backgroundSize: `${size}` , backgroundRepeat:'no-repeat' , }}>
        
       
        
           
             <div className=" grid w-10/12  place-items-center py-5  xl:ml-20 xl:text-left ">
                <Rotate bottom left duration={2500}>
                    <h1 className={`mx-auto w-10/12  ml-20    mt-44  font-bold  text-white md:w-9/12 lg:w-6/12  ${font} `} > {text}  </h1>
                    <h1 className={`mx-auto w-10/12  ml-20     mt-5 font-bold  text-white md:w-9/12 lg:w-6/12  ${font} `} >  {text1} </h1>
                </Rotate>

             </div>
            
          
           


            <div className="flex ml-20 mt-40 z-40 xl:ml-44">
                <a href='#service' className="bg-white border-2 px-4  py-2 text-blue-900 font-bold mr-5 rounded-lg hover:bg-transparent hover:text-white hover:border-white " onClick={handleClick} >COMMENCER</a>

            
                <button onClick={openModal2} className="border-2 border-white px-4  py-2 text-white font-bold  rounded-lg  hover:bg-blue-900 ">Demander un devis</button>
             
                
            </div>

            <div className="w-screen  grid place-items-center text-5xl mt-40 animate-bounce text-white xl:relative xl:bottom-20">
               <AiOutlineDown className={`${color}`} onClick={handleClick} href="#values" />
              
            </div>
        

           

            <Modal
                isOpen={modalIsOpen2}

                style={customStyles}
                contentLabel="Example Modal"
            >

               
                <div className="flex w-full justify-between px-2">
                    <h2 className=" text-lg md:text-3xl  text-blue-900 font-bold ml-10 mt-3" >  Vous cherchez ? </h2>
                    <AiOutlineCloseCircle onClick={() => { setIsOpen2(false) ,setIsOpen1(false) }} className="text-blue-900 text-4xl cursor-pointer " />
                </div>

                <div className="md:flex justify-around w-8/12 mx-auto mt-10 ">

                 

                            <Fade bottom>

                                <div className={`  w-40 h-40  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition mb-10 lg:mb-0  ease-out duration-500 `} onClick={changeColor1} >

                                    <h3 className={` ${txt1} text-lg font-bold  group-hover:text-white `}>Platfrom / <br /> Website</h3>

                                </div>


                            </Fade>
                  
                  
                 


                    <Fade bottom>
                        <div className={` w-40 h-40  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                            <h3 className={` ${txt2} text-lg font-bold  group-hover:text-white text-center `} > Mobile <br /> Application </h3>
                        </div>

                    </Fade>
                   
                        
                    


                   
              




                </div>
       <Link href={route} >
                    <div className="mx-auto md:w-3/12 w-8/12 mt-14">
                        <button className="flex  border-2 border-blue-900 px-4  justify-around  w-11/12 py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900 transition ease-out duration-500"  >Demander un Devis
                            <ChevronRightIcon className="w-5 ml-3 mt-1" />
                        </button>

                    </div>
       </Link>
                


            </Modal>

            

            

            
        </div>
    )
}

export default Banner
