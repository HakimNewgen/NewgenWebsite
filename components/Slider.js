// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'



import { Swiper, SwiperSlide } from 'swiper/react'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
import 'swiper/swiper-bundle.css';

import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import Image from 'next/image'

const Slider = () => {
    return (

        <div className=' w-10/12 mx-auto'>
             

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=""
            >

                    
                <SwiperSlide className=" w-full ">
                    <div className=" ml-28">
                        <h3 className=" hidden md:block relative top-52 font-bold text-blue-900 text-2xl  mt-7 mb-20 " >Apps & Platforms</h3>

                        <div className="  mr-20 md:flex">

                             <div className="">
                             <p className="  text-gray-500 hidden md:flex relative  top-48">  Nous développons et déployons des applications métiers personnalisées <br /> pour permettre à nos clients de piloter leurs activités
                           
                               </p>
                             <button className="hidden md:flex border-2 border-blue-900 px-4 relative  top-60 py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                            <ChevronRightIcon className="w-5 ml-3 mt-1" />
                           </button>
                             </div>
                            

                            <Image src="https://i.ibb.co/6H2hyDx/undraw-web-devices-ad58-1.png" width={600} height={400}/>
                        </div>

                      

                         
                      </div>
                   
                </SwiperSlide>

                <SwiperSlide className=" w-full ">
                    <div className=" ml-28">
                        <h3 className=" hidden md:block relative top-52 font-bold text-blue-900 text-2xl  mt-7 mb-20 " >Cloud services</h3>

                        <div className="mr-20 md:flex">

                           <div className="">
                           <p className=" text-gray-500 hidden md:flex relative  top-48"> Nous construisons- en collaboration avec le  service IT de <br /> nos clients  la stratégie de  migration vers le cloud.  ainsi que <br />les réductions de coûts associés
                            </p>
                           <button className="hidden md:flex  border-2 border-blue-900 px-4 relative  top-60   py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>
                           </div>
                            

                            
                            
                            <Image src="https://i.ibb.co/L5QWTxK/Capture.png" width={600} height={400} />
                        </div>

                      


                    </div>
                   
                </SwiperSlide>
                <SwiperSlide className=" w-full  h-5/6 ">
                    <div className=" ml-28">
                        <h3 className=" hidden md:block relative top-52 font-bold text-blue-900 text-2xl  mt-7 mb-20  " >Digital marketing</h3>

                        <div className="mr-20 md:flex">
                          <div className="">
                          <p className=" text-gray-500 hidden md:flex relative  top-48">  Nous construisons des stratégies marketing uniques  en actionnant <br /> les leviers technologiques  afin d’augmenter la notoriété digitale<br /> de nos clients
                            </p>
                            <button className="hidden md:flex border-2 border-blue-900 px-4 relative  top-60  py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>

                          </div>
                 
                         
                            <Image src="https://i.ibb.co/7SBqdJq/7-easy-ways-digital-marketing-helps-to-grow-your-business-1.jpg" width={600} height={400} />
                        </div>


                    </div>
                  
                    <div className="">
                        <br /> <br />
                    </div>
                   
                </SwiperSlide>


                <SwiperSlide className=" w-full py-5 ">
                    <div className=" ml-28">

                        <h3 className=" hidden md:block relative top-52 font-bold text-blue-900 text-2xl  mt-7 mb-20  " >Data Analytics</h3>
                          

                       
                        <div className="mr-20 md:flex md:justify-between">
                              <div className="">
                            <p className=" text-gray-500 hidden md:flex relative  top-48"> Nous accompagnons  nos clients à travers toutes ses étapes qui <br /> lui permettront d’être une Data Driven Company </p>
                            <button className="  hidden md:flex border-2 border-blue-900 px-4 relative  top-60   py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>
                              </div>

                                <Image  src="https://i.ibb.co/rcxPjD7/Power-BI-Dash.png" width={500} height={300} />
                           
                        
                        </div>


                    </div>
                   
                </SwiperSlide>
               
            </Swiper>

            
            
        </div>
    )
}

export default Slider