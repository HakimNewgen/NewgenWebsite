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

const Step7 = ({ setForm, formData, navigation    }) => {
    
    const [typedev, settypedev] = useState("")

    const [bg1, setbg1] = useState("")
    const [bg2, setbg2] = useState("")
    const [bg3, setbg3] = useState("")
    const [txt1, settext1] = useState("text-gray-500")
    const [txt2, settext2] = useState("text-gray-500")
    const [txt3, settext3] = useState("text-gray-500")

    const { previous, next } = navigation;



    const changeColor1 =()=>{
        setbg1('bg-blue-900')
        settext1('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg3('')
        settext3('text-gray-500')

        settypedev("Front end")

    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        settypedev("Back end")
    }

    const changeColor3 = () => {
        setbg3('bg-blue-900')
        settext3('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg1('')
        settext1('text-gray-500')
        settypedev("Full Stack")
    }

    const moveOn = ()=>{
        if(!typedev){
            alert('Choisissez au moins une reponse')
        }else{
            formData.typedev=typedev
            console.log(formData)
            next()
        }
    }

    return (
        <div className="grid place-items-center ">
            <div className=" hidden bg-blue-900 mx-auto relative bottom-10 lg:grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                <h3 className="font-bold text-white text-4xl mr-1 " >7/7</h3>
            </div>

            <h3 className="lg:text-3xl text-blue-900    font-extrabold w-5/12  mx-auto" >  </h3>

            <div className="flex justify-around w-full text-blue-900">
            <IoArrowBackCircleOutline onClick={previous}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 ml-5 cursor-pointer " />
            <h3 className="text-2xl text-blue-900    font-extrabold w-5/12  ml-32" >Quelle la durée du projet ?</h3>
             
            <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />
             
                
            </div>

            <div className="   w-10/12 flex mx-auto   justify-around  relative mb-44  top-10 right-5 ">



                <div className="flex justify-around w-full ">

                    <Fade duration={1000} bottom  >
                        <div className={`w-32 h-32  lg:w-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor1} >

                            <h3 className={` ${txt1} text-xl font-bold  group-hover:text-white `}>1-3</h3>

                        </div>
                    </Fade>
        

                    <Fade duration={1000} bottom delay={600} >
                        <div className={` w-32 h-32  lg:w-44 rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                            <h3 className={` ${txt2} text-xl font-bold  group-hover:text-white `} >3-6</h3>
                        </div>

                    </Fade>

                    <Fade duration={1000} bottom delay={600} >
                        <div className={` w-32 h-32  lg:w-44  rounded-3xl ${bg3} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor3}>
                            <h3 className={` ${txt3} text-xl font-bold  group-hover:text-white `} > &gt;3</h3>
                        </div>

                    </Fade>




                </div>

            </div>

        </div>
    );
};

export default Step7;