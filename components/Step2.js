import React , {useState} from "react";

import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';


const Step2 = ({ setForm, formData, navigation  , service}) => {
    const [design, setDesign] = useState("")

    const { previous, next } = navigation;


    const [bg1, setbg1] = useState("")
    const [bg2, setbg2] = useState("")
    const [bg3, setbg3] = useState("")
    const [txt1, settext1] = useState("text-gray-500")
    const [txt2, settext2] = useState("text-gray-500")
    const [txt3, settext3] = useState("text-gray-500")
    const changeColor1 = () => {
        setbg1('bg-blue-900')
        settext1('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        if(service=="web"){
            setDesign('template')
        }else{
            setDesign('simple')
        }
      

    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        if (service == "web") {
            setDesign('Design sur Mesure')
        } else {
            setDesign('Personnalisé')
        }

      
    }

    const changeColor3 = () => {
        setbg3('bg-blue-900')
        settext3('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg1('')
        settext1('text-gray-500')
        setDesign("Similaire au site web")
    }


    const moveOn = () => {
        console.log(design)
        if (design) {
            formData.design = design
            next()
        } else {
            alert('choisir au moins une options')
        }
    }


    return (
        <div className="grid place-items-center ">

       {  service=="web"?(

        <>
                    <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                        <h3 className="font-bold text-white text-4xl mr-1 " >2/7</h3>
                    </div>
                    
                    <div className="flex justify-around w-full text-blue-900">
                    <IoArrowBackCircleOutline onClick={previous}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 ml-5 cursor-pointer " />
                    <h3 className=" text-lg lg:text-3xl text-blue-900    font-extrabold w-5/12  mx-auto" > Vous voulez partir sur ..? </h3>
                    <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />
                     
                        
                    </div>



                    <div className=" mb-52 lg:mb-16 w-10/12 flex mx-auto  justify-around  relative  lg:top-10">



                        <div className="flex justify-around w-full ">

                            <Fade duration={1000} bottom  >
                                <div className={`  w-32 h-32  lg:w-44 lg:h-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500  `} onClick={changeColor1} >

                                    <h3 className={` ${txt1} lg:text-xl text-sm font-bold  group-hover:text-white `}>Template</h3>

                                </div>
                            </Fade>


                            <Fade duration={1000} bottom delay={600} >
                                <div className={` w-32 h-32  lg:w-44 lg:h-44 ml-5  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                                    <h3 className={` ${txt2} lg:text-xl text-sm font-bold  group-hover:text-white `} >Site Sur <br /> Mesure </h3>
                                </div>

                            </Fade>




                        </div>

                    </div>

                   
        </>

       ):(
           <>
                        <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                            <h3 className="font-bold text-white text-4xl mr-1 " >2/7</h3>
                        </div>

                        <h3 className="text-3xl text-blue-900    font-extrabold w-5/12  mx-auto" >design de  votre  application ?</h3>



                        <div className="  w-10/12 flex mx-auto  justify-around  relative  top-10">



                            <div className="flex justify-around w-full ">

                                <Fade duration={1000} bottom  >
                                    <div className={` w-44 h-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor1} >

                                        <h3 className={` ${txt1} text-xl font-bold  group-hover:text-white `}> Simple</h3>

                                    </div>
                                </Fade>


                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                                        <h3 className={` ${txt2} text-xl font-bold  group-hover:text-white `} > personnalisé</h3>
                                    </div>

                                </Fade>

                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg3} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor3}>
                                        <h3 className={` ${txt3} text-xl font-bold  text-center group-hover:text-white `} > Similaire <br/> au Site Web
</h3>
                                    </div>

                                </Fade>




                            </div>

                        </div>

                        <div className="flex justify-around mx-auto w-8/12 mt-5  relative  top-48 ">

                            <button className="bg-blue-900 border-2 px-10 w-4/12  py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around transition ease-out duration-500    " onClick={moveOn}>
                                <h3 className="font-bold  text-xl    " >   Next Step </h3>
                                <ChevronRightIcon className=" h-5 w-5 ml-3 mt-1 font-bold text-3xl " />


                            </button>
                        </div>
           </>
       )
            
                
           }
           
        </div>
    );
};

export default Step2;
