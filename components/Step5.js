import { useState } from 'react';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
const Step5 = ({ setForm, formData, navigation , service }) => {
   

    const { previous, next } = navigation;

    const categorysection = ["Formulaire de contact ", "Sliders / Bannières ", "Blog Professionnel", " Demande Devis/Réservation en ligne ", "Plan Google Maps", "Paiement en ligne ", "Portfolios Personnel ", "Site multilingue","Rédaction du Contenu"]

    const categorysectionMobile = ["Intégration d’app dans un site web ", "  Les utilisateurs avec profil ", "Interface d’administration",  "Plan Google Maps", ]
    const [selected, setSelected] = useState([]);

    function onChange(event, item) {
        if (event.target.checked) {
            setSelected([...selected, item]);
        } else {
            setSelected((prev) =>
                prev.filter((currItem) => currItem.value !== item.value)
            );
        }
        console.log(selected)
    }


    const moveOn= ()=>{
        formData.infosupp1= selected.toString()
        console.log(formData)
        next()
    }
  
    return (
        
            <div className=" bg-gray-50 h-full  grid place-items-center ">

            { 
               service =="web"?(
                   <>
                      <div className=" hidden bg-blue-900 w-screen mx-auto relative bottom-16 lg:grid place-items-center   " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                    <h3 className="font-bold text-white text-4xl mr-1   " >5/7</h3>
                </div>

            <div className="flex justify-around w-full text-blue-900">
                        <IoArrowBackCircleOutline onClick={previous}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 ml-5 cursor-pointer " />
                        <h3 className=" text-xl lg:text-2xl text-blue-900    font-extrabold w-9/12  lg:ml-20" >Choisissez les fonctionnalités supplémentaires de votre site</h3>
                        <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />
                         
                            
                        </div>

         
               <div className=" grid place-items-center mt-20  w-full relative lg:bottom-14   ">
                            <div className="flex w-10/12  justify-between mb-24 ">
                            {categorysection.slice(0,3).map((categorylabel, i) => (
                                
                                    <div key={i} className=" flex w-4/12" >

                                       <div className="check_container">
                                       <input
                                            type="checkbox"
                                            id={categorylabel.value}
                                            name="vehicle1"
                                            value="Bike"
                                            className="checkbox-round"
                                            onChange={(event) => onChange(event, categorylabel)}
                                        />
                                       </div>
                                       
                                        <label className=" text-xs  md:text-sm text-gray-500 ml-5" >{categorylabel}</label>
                                    </div>
                             
                             
                            ))}
                              
                            </div>

                            <div className="flex w-10/12 justify-between mb-24">
                                {categorysection.slice(3, 6).map((categorylabel, i) => (

                                    <div key={i} className="flex w-4/12" >

                                       <div className="check_container">
                                       <input
                                            type="checkbox"
                                            id={categorylabel.value}
                                            name="vehicle1"
                                            value="Bike"
                                            className="checkbox-round"
                                            onChange={(event) => onChange(event, categorylabel)}
                                        />
                                       </div>
                                       
                                       <label className=" text-xs  md:text-sm text-gray-500 ml-5" >{categorylabel}</label>
                                    </div>


                                ))}

                            </div>

                            <div className="flex w-10/12 justify-between ">
                                {categorysection.slice(6,9).map((categorylabel, i) => (

                                    <div key={i} className="flex w-4/12 " >

                                        <div className="check_container">
                                        <input
                                            type="checkbox"
                                            id={categorylabel.value}
                                            name="vehicle1"
                                            value="Bike"
                                            className="checkbox-round"
                                            onChange={(event) => onChange(event, categorylabel)}
                                        />
                                        </div>

                                        <label className=" text-xs  md:text-sm  text-gray-500 ml-5" >{categorylabel}</label>
                                        </div>


                                ))}

                            </div>
               </div>

            
         

                

                   </>
               ):(
                   <>
                            <div className=" bg-blue-900 mx-auto relative bottom-16 grid place-items-center   " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                                <h3 className="font-bold text-white text-4xl mr-1 " >5/7</h3>
                            </div>

                            <h3 className="text-2xl text-blue-900    font-extrabold w-9/12 relative bottom-24 mx-auto" > Les fonctionnalités supplémentaires de votre application</h3>


                            <div className=" grid place-items-center w-full relative bottom-14   ">
                                <div className="flex w-10/12  justify-between mb-24 ">
                                    {categorysectionMobile.slice(0, 3).map((categorylabel, i) => (

                                        <div key={i} >
                                            <input
                                                type="checkbox"
                                                id={categorylabel.value}
                                                name="vehicle1"
                                                value="Bike"
                                                onChange={(event) => onChange(event, categorylabel)}
                                            />
                                            <label >{categorylabel}</label>
                                        </div>


                                    ))}

                                </div>

                                <div className="flex w-10/12 justify-between mb-24">
                                    {categorysectionMobile.slice(3, 6).map((categorylabel, i) => (

                                        <div key={i} >
                                            <input
                                                type="checkbox"
                                                id={categorylabel.value}
                                                name="vehicle1"
                                                value="Bike"
                                                onChange={(event) => onChange(event, categorylabel)}
                                            />
                                            <label >{categorylabel}</label>
                                        </div>


                                    ))}

                                </div>

                                <div className="flex w-10/12 justify-between ">
                                    {categorysectionMobile.slice(6, 9).map((categorylabel, i) => (

                                        <div key={i}  >
                                            <input
                                                type="checkbox"
                                                id={categorylabel.value}
                                                name="vehicle1"
                                                value="Bike"
                                                onChange={(event) => onChange(event, categorylabel)}
                                            />
                                            <label >{categorylabel}</label>
                                        </div>


                                    ))}

                                </div>
                            </div>







                            <div className="flex justify-around mx-auto w-8/12    ">

                                <button className="bg-blue-900 border-2 px-10 w-4/12  py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around text-xl  transition ease-out duration-500 " onClick={moveOn}>
                                    <h3 className="font-bold  text-xl  " >   Next Step </h3>
                                    <ChevronRightIcon className=" h-5 w-5 ml-3 mt-1 font-bold text-3xl " />


                                </button>
                            </div>
                   </>
               )
            }


               
            </div>
        
            

           

    
    )
}

export default Step5
