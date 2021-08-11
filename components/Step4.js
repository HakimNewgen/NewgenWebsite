import { useState } from "react";

import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'


import Bounce from 'react-reveal/Bounce';
import MultiSelect from './MultiSelect'
import Fade from 'react-reveal/Fade';

import styles from "../styles/Form.module.scss";

import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';


const Step4 = ({ setForm, formData, navigation , service }) => {
    

    const { previous, next } = navigation;

    const [counter, setcounter] = useState(0)
    const [login, setLogin] = useState("")


    const movOn = () =>{
        if(counter==0 && !login){
            alert('Choisir au moins une reponse')
        }else{
            formData.nbrpage = counter
            formData.login = login
            next()
        }
    }

    

    const inc = () => {
        setcounter(counter + 1)
    }

    const dec = () => {
        if (counter == 0) {
            setcounter(0)
        } else {
            setcounter(counter - 1)
        }
    }


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
        setLogin("Réseaux  sociaux   + e-mail")



    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        setLogin("e-mail")

    }

    const changeColor3 = () => {
        setbg3('bg-blue-900')
        settext3('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg1('')
        settext1('text-gray-500')
        setLogin("Sans")
    }



    return (

        <div className=" bg-gray-50 h-full  grid place-items-center ">


            {
                service == "web" ? (
                    <>
                        <div className=" hidden  bg-blue-900 mx-auto relative bottom-20 md:grid place-items-center   " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                            <h3 className="font-bold text-white text-4xl mr-1 " >4/7</h3>
                        </div>



                        <div className="flex justify-around w-full text-blue-900">
                        <IoArrowBackCircleOutline onClick={previous}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 ml-5 cursor-pointer " />
                        <h3 className="md:text-3xl text-blue-900    font-extrabold w-7/12 relative lg:bottom-24 mx-auto" > Combien de pages  Contient votre site ?</h3>

                        <IoArrowForwardCircleOutline onClick={movOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />
                         
                            
                        </div>


                        <div className=" mb-52 lg:mb-16  w-10/12 flex mx-auto  justify-around  top-32 relative  lg:top-14">
                            <div className={styles.container}>
                                <span className={styles.prev} onClick={dec} ></span>
                                <span className={styles.next} onClick={inc}></span>
                                <div className={styles.box}>
                                    <Bounce left duration={3000} delay={500} >
                                        <span>{counter}</span>
                                    </Bounce>

                                </div>
                            </div>
                        </div>





                      
                    </>
                ):(

                    <>
                            <div className=" bg-blue-900 mx-auto relative bottom-20 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                                <h3 className="font-bold text-white text-4xl mr-1 " >4/7</h3>
                            </div>

                            <h3 className="text-3xl text-blue-900    font-extrabold w-5/12 relative bottom-10  mx-auto" > Votre système de login ?</h3>



                            <div className="  w-10/12 flex mx-auto  bottom-10 justify-around  ">



                                <div className="flex justify-around w-full relative bottom-10 ">

                                    <Fade duration={1000} bottom  >
                                        <div className={` w-44 h-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor1} >

                                            <h3 className={` ${txt1} text-xl font-bold  group-hover:text-white `}> Réseaux <br/> sociaux  <br/> + e-mail</h3>

                                        </div>
                                    </Fade>


                                    <Fade duration={1000} bottom delay={600} >
                                        <div className={` w-44 h-44  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                                            <h3 className={` ${txt2} text-xl font-bold  group-hover:text-white `} > e-mail</h3>
                                        </div>

                                    </Fade>

                                    <Fade duration={1000} bottom delay={600} >
                                        <div className={` w-44 h-44  rounded-3xl ${bg3} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor3}>
                                            <h3 className={` ${txt3} text-xl font-bold  text-center group-hover:text-white `} > Sans
                                            </h3>
                                        </div>

                                    </Fade>




                                </div>

                            </div>

                            <div className="flex justify-around mx-auto w-8/12 mt-5  ">

                                <button className="bg-blue-900 border-2 px-10 w-4/12  py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around transition ease-out duration-500" onClick={movOn} >
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

export default Step4;
