
import styles from "../styles/CloudService.module.css";
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import Footer from "./Footer";

import Bounce from 'react-reveal/Bounce';
import Latest from "./Latest";

import Image  from "next/image";

function CloudService() {
    return (
        <div>
            <div className={styles.support_scrollsnap}></div>

            <div className={styles.scroll_container}>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between w-10/12 mx-auto">
                        <div className="">

                            <h1 className="bg-white p-5 text-black  mix-blend-screen text-4xl mb-32 font-extrabold rounded-lg " >permettre à vos équipes de</h1>
                            

                            <Bounce duration={3000}>
                                <h1 className="text-white flex text-3xl mb-20 font-bold " > <CheckIcon className="w-10  mr-3 text-white" />Travailler et collaborer
                                    à distance  </h1>
                            </Bounce>

                            <Bounce duration={3000} delay={700} >
                                <h1 className="text-white flex text-3xl mb-20 font-bold " > <CheckIcon className="w-10  mr-3 text-white" />Partager des fichiers ou écrans </h1>
                            </Bounce>
                            
                          
                            
                            <Bounce duration={3000} delay={1000} >

                                <h1 className="text-white flex text-3xl font-bold " > <CheckIcon className="w-10  mr-3 text-white" />Collaborer à plusieurs sur un même <br /> document</h1>

                            </Bounce>



                            
                            
                        </div>
                         <div className="hidden lg:block">
                        <Image className="rounded-xl  ml-60  " src="https://i.ibb.co/G7q93Hs/Capture.png" height={400} width={500} alt="" />
                           
                         </div>
                    </div>
                </div>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between w-10/12 mx-auto">
                        <div className="">

                            <h1 className="text-blue-900 p-5 w-10/12 ml-24 mt-20 text-4xl mb-24 font-extrabold rounded-lg " >Pour avoir accès à distance à votre entreprise en toute sécurité</h1>

                           




                        </div>

                        <div className="hidden lg:block">
                        <Image className="rounded-xl  ml-60 h h-3/4 " src="https://i.ibb.co/TkCC834/Capture.png" width={600} height={900} alt="" />

                          
                        </div>
                         
                    </div>
                </div>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between w-11/12 mx-auto">
                        <div className="">
                            
                            <h1 className=" bg-white p-5 text-black ml-24   mix-blend-screen text-4xl font-extrabold rounded-lg " >faciliter l’accès à vos applications <br /> métiers</h1>



                        </div>

                        <div className="hidden lg:block">
                        <Image className="rounded-xl  ml-60 " src="https://i.ibb.co/zP25k5n/visuel.png" height={500} width={500} alt="" />
                          
                        </div>

                    </div>
                </div>
            </div>
            <br /><br />
             <Latest />
            <Footer />

            
        </div>
    )
}

export

default CloudService
