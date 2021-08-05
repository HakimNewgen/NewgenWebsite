
import image from 'next/image';
import {
    PlayIcon
} from '@heroicons/react/solid'
import Image from 'next/image'

import Link from 'next/link'
import Fade from 'react-reveal/Fade';


function Service() {
    return (
        <div >

           <div className="flex justify-between w-11/12 ">
                <h3 className="font-bold text-blue-900 text-5xl mb-20 mx-auto w-9/12 " >Nos Services</h3>
                <div className=" animate-ping transition 4s ease-out hidden lg:flex ">
                    <Image src="https://i.ibb.co/NKQwY85/vectorpaint-3.png"  height={50} width={100} />
                </div>
           </div>
           


            <div className=" clip bg-gradient-to-t from-blue-900  bg-opacity-20 ">
                <div className=" grid  place-items-center   lg:flex w-8/12 lg:w-8/12 md:1/12 mx-auto justify-between mb-24 ">

                    <Fade right duration={2500} delay={200}>
                        <Link href="/apps_platforms">
                            <div className="shadow-lg rounded-xl  border-b-4  border-blue-900 bg-white  transition ease-out duration-500 group  hover:bg-blue-900 cursor-pointer w-80 h-44 grid place-items-center  mt-16 ">

                                <div className="hidden group-hover:flex animate-bounce ">

                                    <Image src="https://i.ibb.co/NszLX4K/icons8-multiple-devices-64-2.png" width={50} height={60} />


                                </div>

                                <div className="group-hover:hidden">

                                    <Image src="https://i.ibb.co/ykbVs5S/icons8-multiple-devices-64-1.png" width={50} height={60} />
                                </div>
                                <h3 className="text-xl text-blue-900 group-hover:text-white ">Apps & Platforms</h3>


                            </div>
                        </Link>
                    </Fade>



                    <Fade left duration={2500} delay={200} >
                        <Link href="/cloud_services">
                            <div className="shadow-lg rounded-xl   border-b-4  border-blue-900 bg-white transition ease-out duration-500 group w-80 h-44 grid hover:bg-blue-900 cursor-pointer place-items-center mt-16">

                                <div className="hidden group-hover:flex animate-bounce">
                                    <Image className="" src="https://i.ibb.co/QYy9XR8/icons8-cloud-computing-50-2.png" width={50} height={60} />
                                </div>

                                <div className="group-hover:hidden">
                                    <Image src="https://i.ibb.co/n7r0cFH/icons8-cloud-computing-50.png" width={50} height={60} />
                                </div>
                                <h3 className="text-xl text-blue-900 group-hover:text-white ">Cloud Services</h3>


                            </div>
                        </Link>
                    </Fade>



                </div>



                <div className=" lg:flex mx-auto justify-between lg:mb-20  w-8/12 lg:w-8/12 ">

                    <Fade right={2500} delay={300}>
                        <Link href="/data_analytics" >
                            <div className="shadow-lg rounded-xl  border-b-4  border-blue-900 bg-white transition ease-out duration-500 group    w-80 h-44 grid  hover:bg-blue-900 cursor-pointer place-items-center mt-16 ">
                                <div className="hidden group-hover:flex animate-bounce">
                                    <Image className="" src="https://i.ibb.co/xHxMTGM/icons8-web-analytics-80-1.png" width={50} height={60} />
                                </div>

                                <div className="group-hover:hidden">

                                    <Image src="https://i.ibb.co/r62Zd7F/icons8-web-analytics-80.png" width={50} height={60} />
                                </div>
                                <h3 className="text-xl text-blue-900 group-hover:text-white ">Data Analytics</h3>


                            </div>
                        </Link>

                    </Fade>


                    <Fade left duration={2500} delay={300} >

                        <Link href="/digital_marketing">
                            <div className="shadow-lg rounded-xl   border-b-4  border-blue-900  bg-white transition ease-out duration-500   group   w-80 h-44 grid hover:bg-blue-900 cursor-pointer place-items-center mt-16 ">
                                <div className="hidden group-hover:flex animate-bounce">
                                    <Image className="" src="https://i.ibb.co/MBRNcGX/vectorpaint-2.png" width={80} height={80} />
                                </div>

                                <div className="group-hover:hidden">
                                    <Image src="https://i.ibb.co/hY4qWFC/vectorpaint-1.png" width={80} height={80} />
                                </div>



                                <h3 className="text-xl text-blue-900 group-hover:text-white ">Digital Marketing</h3>


                            </div>
                        </Link>
                    </Fade>




                </div>
                <div className=" h-96 mt-20 grid place-items-center " style={{ background: 'url("https://i.ibb.co/6FCvYnx/bg-23.jpg") ', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="flex justify-items-center ">
                        <h3 className="font-bold text-xl lg:text-2xl text-right text-white      ">
                        Les grandes réalisations ne sont 
                        jamais <br/> faites par une seule personne ,<br/> 
                        elles sont faites par une équipe de <br/>
                        personnes.</h3>

                        <PlayIcon className="   w-36 text-blue-400   ml-14 hover:text-white cursor-pointer" />

                        <h3 className=" hidden lg:flex font-medium text-lg text-right text-white  mt-14 ml-5   "> Voir notre histoire </h3>


                    </div>

                </div>

            </div>

              
            


           


            
        </div>
    )
}

export default Service
