import { RiFacebookFill, RiTwitterFill, RiLinkedinFill} from 'react-icons/ri';
import Image from "next/image"

function Footer() {
    return (
        <div>
            <footer className="footer-1 text-white bg-blue-900 py-8 sm:py-12 mt-16">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        
                        
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                <Image src="https://i.ibb.co/tDKR0TV/newgen-Logo.png"   width={300} height={70} />
                       
                                </li>
                                <li className="mb-2">
                                  <h3 className="text-white font-bold text-xl" >New Vision New Future</h3>
                       
                                </li>
                            </ul>
                        </div>

                      
                        <div className="px-4 ml-44 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Mobile</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2  ">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-blue-900 ">+33 7 61 66 44 38 </a>
                                </li>
                                <li className="mb-2  ">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-blue-900 ">+212 6 60 10 12 74 
</a>
                                </li>
                                <li className="mb-2  ">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-blue-900 ">hello@newgen.ma  </a>
                                </li>
                               
                            </ul>


                            <h5 className="text-xl font-bold mb-6 mt-20">Adresse</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-blue-900 ">131 Boulevard Anfa Residence Azur Bureau N° 11 B Casablanca  </a>
                                    </li>
                               
                            </ul>
                        </div>
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                            <div className="flex sm:justify-center xl:justify-start">
                                <a href="" className="h-8 w-8 border-2 border-gray-400 rounded-full text-center py-1  hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiFacebookFill className="w-6 h-6"/>
                                </a>
                                <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center p-1 ml-2 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiTwitterFill className="w-5  h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/newgenintelligence/" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center p-1 ml-2 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <RiLinkedinFill className="w-5  h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    
                        </div>
</footer>
            
        </div>
    )
}

export default Footer
