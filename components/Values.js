import {
    LinkIcon,
} from '@heroicons/react/outline'

import { FaUserTie } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {HiOutlineChatAlt} from 'react-icons/hi'
import Link from 'next/link';

function Values() {
    return (
        <div className="" >

      
       

            <div className=" mx-auto w-8/12 md:flex   md:w-11/12  justify-around  lg:relative   lg:bottom-40  ">

         
        

            

              <Fade duration={2000} bottom  >
                    <div className="w-72 p-5 bg-white   rounded-xl   shadow-lg  border-b-4  border-blue-900 ">
                        <div className="flex justify-between">
                            <h4 className="font-bold text-blue-900 text-xl mb-6" >Confiance</h4>
                            <LinkIcon className=" w-10 text-blue-900 text-center ml-32 mb-6  " />

                        </div>

                        <p className="text-gray-500">Nous sommes persuadés que la confiance amène à  des collaborations pérenne dans le temps. Par conséquent, établir et maintenir ’une relation de confiance avec nos collaborateurs ainsi que nos clients est un impératif.</p>

                    </div>
              </Fade>

              <Fade duration={2000} delay={500} bottom >
                    <div className="w-72   p-5 bg-white   rounded-xl   shadow-lg border-b-4  border-blue-900 mt-20  md:mt-0">
                        <div className="flex justify-between">
                            <h4 className="font-bold text-blue-900 text-xl mb-6" >Professionnalisme</h4>
                            <FaUserTie className=" text-3xl text-blue-900 text-center " />


                        </div>

                        <p className="text-gray-500">Nous avons  un grand sens d’engagement envers nos clients. Nos équipes investissent pleinement dans leur travail quotidien dans le but de livrer des produits de qualité dans les temps.</p>

                    </div>
              </Fade>
               

               

                <Fade duration={2000} delay={1000} bottom >
                    <div className="w-72  p-5 bg-white  rounded-xl  shadow-lg border-b-4  border-blue-900 mt-20 md:mt-0">

                        <div className="flex justify-between">
                            <h4 className="font-bold text-blue-900 text-xl mb-6" >Collaboration</h4>
                            <FaHandshake className="  text-4xl text-blue-900 text-center  " />




                        </div>

                        <p className="text-gray-500" >Notre réussite dépend de celle de nos clients. Nous  insufflons à nos équipe  l’esprit de collaboration et de partage dans le but de  faciliter le partage et développer les compétences</p>

                    </div>
                </Fade>

              
            </div>

          
        </div>
    )
}

export default Values
