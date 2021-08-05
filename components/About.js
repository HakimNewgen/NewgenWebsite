import Image  from "next/image"
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import Zoom from 'react-reveal/Zoom';

function About() {
    return (
        <div className="mx-auto  mb-40">
            <h3 className="font-bold text-blue-900 text-4xl  mt-14 mb-20 mx-auto w-9/12  " >A propos de Nous</h3>

            <div className="block md:flex mx-auto w-10/12 justify-between">

              <div className="w-83 mx-14  ">
                    <p className=" flex mb-12">  Fondée en 2020 par deux jeunes ingénieurs,
                        Newgen est un fournisseur de services <br /> technologiques basé
                        à Casablanca.
                    </p>
                    <p className=" flex mb-12">  Notre mission est daccompagner nos clients dans leurs ambitions de transformation <br /> numérique en leur fournissant à la fois des services commerciaux et technologiques. </p>


                    <p className=" flex mb-12"> Nos employés bénéficient dune culture fondée sur linnovation et lengagement.
                    </p>
                    <button className="flex  border-2 border-blue-900 px-4  py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                      <ChevronRightIcon className="w-5 ml-3 mt-1"/>
                    </button>
              </div>

              <Zoom left duartion={2000} delay={300}>
                    <div className="relative   left-36 z-0 mr-32 ">
                        <Image src="https://i.ibb.co/xCb6JyC/Marketing-Analysis-Accounting-Team-Business-Meeting-Concept.jpg" className="rounded-lg" width={400} height={400} />
                    </div>
              </Zoom>

             

              
              
           </div>

           


           
            
        </div>
    )
}

export default About
