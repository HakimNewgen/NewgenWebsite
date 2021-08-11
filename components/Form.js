import { useState } from "react"

import Image from 'next/image'
import MultiStep from './MultiStep'
import LightSpeed from 'react-reveal/LightSpeed';

import Modal from 'react-modal';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';


import Bounce from 'react-reveal/Bounce';

import Fade from 'react-reveal/Fade';
function Form({service}) {

    const [modalIsOpen1, setIsOpen1] = useState(true);

    const [name, setName] = useState("")
    const [email, setemail] = useState("")

    const showdata = ()=>{
        console.log(name , email)

        if(name && email ){
        setIsOpen1(false)


        }else{
            alert("Introduire vos données avant de continuer ")
        }

    }
 

    const getname =(e)=>{
        setName(e.target.value)
    }

    const getemail = (e) => {
        setemail(e.target.value)
    }



  

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
            width: '90%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '40px'
        },
    };
    return (
        <div className="  w-screen rounded-lg lg:h-xxl  bg-blue-900  " >



           
                <div className=" bg-white rounded-lg h-4/5 mb-2 mt-14  w-11/12 mx-auto   ">
                    {
                        !modalIsOpen1 ?(
                        <MultiStep service={service} name={name} email={email} />
                        ):(
                            <></>
                        )
                    }
                </div>


            <Modal
                isOpen={modalIsOpen1}

                style={customStyles}
                contentLabel="Example Modal"
            >
                <Bounce left duration={2000} delay={100}>
                    <div className="flex w-full justify-between px-2">
                        <h2 className="text-3xl  text-blue-900 font-bold ml-10 mt-3" > A propos de vous ? </h2>
                        <AiOutlineCloseCircle onClick={() => {  if(name && email ){
                            setIsOpen1(false)
                    
                    
                            }else{
                                alert("Introduire vos données avant de continuer ")
                            } }} className="text-blue-900 text-4xl cursor-pointer " />
                    </div>

                    <div className="flex mt-10 ml-10 ">
                        <p>Je suis    </p> <input type="text" placeholder="Your FulName" onChange={getname} className=" ml-5 mr-5 w-5/12 border-b-2 outline-none border-gray-400 text-blue-900 text-lg " />  <p className="hidden lg:flex" > ,  je cherche </p>  <input type="text" placeholder="Service" className=" hidden lg:flex  ml-5 w-3/12 border-b-2 outline-none border-gray-400 text-blue-900 text-lg " />
                    </div>

                    <div className="flex mt-10 ml-10 ">
                        <p>Contacter moi sur    </p> <input type="email" placeholder="Your Email" onChange={getemail} className=" ml-5 mr-5 w-5/12 border-b-2 outline-none border-gray-400  text-blue-900 text-lg " />
                    </div>

                    <div className="mx-auto w-3/12 mt-14">
                        <button className="flex  border-2 border-blue-900 px-4  justify-around  w-12/12  lg:w-8/12 py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900 transition ease-out duration-500" onClick={ showdata} >Confirmer
                            <ChevronRightIcon className="w-5 ml-3 mt-1" />
                        </button>

                    </div>
                </Bounce>

            </Modal>

          



         
            
        </div>
    )
}

export default Form
