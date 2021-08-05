
import { useState } from "react"
import Navbar from "../components/Navbar";
import MultiStep from "../components/MultiStep";
import Banner from "../components/Banner";
import Form from "../components/Form";
import Modal from 'react-modal';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Head from 'next/head'


import Bounce from 'react-reveal/Bounce';

import Fade from 'react-reveal/Fade';
function devis() {
    

    const openModal1 = () => {
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
            height: '400px',
            width: '1100px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '40px'
        },
    };
    return (
        <div>
            <div className=" bg-center bg-no-repeat   w-screen  z-0 bg-opacity-0 mx-auto text-center  "
                style={{ background: `url("https://i.ibb.co/V3GBNh0/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-1258-523.jpg") `, backgroundSize: `cover`, backgroundRepeat: 'no-repeat', height: '500px' }}>

                <Navbar />



                <div className="mx-auto  w-6/12">
                    <h1 className={`text-4xl text-white text-center mt-24 font-bold mx-auto  z-40`} > Trouver une offre qui repond le plus à vos besoins </h1>
                </div>









            </div>

            <div className=" grid  place-items-center   p-5  relative bottom-44 mt-24   w-11/12 mx-auto  h-screen ">
                <Form />
            </div>


            




        </div>
    )
}

export default devis
