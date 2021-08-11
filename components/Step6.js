import { useState } from 'react';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import MultiSelect from './MultiSelect'
import Fade from 'react-reveal/Fade';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Step6 = ({ setForm, formData, navigation }) => {
    const categorysection = ["Rédaction du cahier des charges ", "Suivis des statistiques avec Google Analytics", " installation du site sur votre hébergement web ", " Optimisation du référencement naturel SEO  "]

    const { previous, next } = navigation;


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


    const moveOn = () => {
        formData.infosupp2 = selected.toString()
        console.log(formData)
        next()
    }


    return (

        <div className=" bg-gray-50 h-full  grid place-items-center ">


        <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
        <h3 className="font-bold text-white text-4xl mr-1 " >6/7</h3>
    </div>


            

            <div className="flex justify-around w-full text-blue-900">
            <IoArrowBackCircleOutline onClick={previous}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 ml-5 cursor-pointer " />
            <h3 className="text-2xl text-blue-900    font-extrabold w-9/12  ml-20" >Choisissez les fonctionnalités supplémentaires de votre site</h3>
             
            <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />
             
                
            </div>

            <div className=" grid place-items-center mt-20  w-full relative lg:bottom-14   ">
                            <div className="flex w-10/12  justify-between mb-24 ">
                            {categorysection.slice(0,2).map((categorylabel, i) => (
                                
                                    <div key={i} className=" flex mx-auto  w-11/12" >

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
                                       
                                        <label className=" text-xs  md:text-sm text-gray-500 " >{categorylabel}</label>
                                    </div>
                             
                             
                            ))}
                              
                            </div>

                            <div className="flex w-10/12  justify-between mb-24">
                                {categorysection.slice(2, 4).map((categorylabel, i) => (

                                    <div key={i} className="flex mx-auto w-11/12" >

                                       <div className="check_container">
                                       <input
                                            type="checkbox"
                                            id={categorylabel.value}
                                            name="vehicle1"
                                            value="Bike"
                                            className="  checkbox-round"
                                            onChange={(event) => onChange(event, categorylabel)}
                                        />
                                       </div>
                                       
                                       <label className=" text-xs  md:text-sm text-gray-500 " >{categorylabel}</label>
                                    </div>


                                ))}

                            </div>

                           
               </div>

            

        </div>






    )
}

export default Step6
