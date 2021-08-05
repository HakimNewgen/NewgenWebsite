import { useState } from 'react';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import MultiSelect from './MultiSelect'
import Fade from 'react-reveal/Fade';

const Step6 = ({ setForm, formData, navigation }) => {
    const categorysection = ["Rédaction du cahier des charges ", "Suivis des statistiques avec Google Analytics", "Mise en ligne et installation du site sur votre hébergement web ", " Optimisation du référencement naturel SEO  "]

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


            <div className=" hidden bg-blue-900 mx-auto relative bottom-16 lg:grid place-items-center   " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                <h3 className="font-bold text-white text-4xl mr-1 " >6/7</h3>
            </div>

            <h3 className="text-2xl text-blue-900    font-extrabold w-9/12 relative bottom-24 mx-auto" >Choisissez les fonctionnalités supplémentaires de votre site</h3>


            <div className=" grid place-items-center w-full relative bottom-14   ">
                <div className="md:flex w-10/12  justify-between mb-24 ">
                    {categorysection.slice(0, 2).map((categorylabel, i) => (

                        <div key={i} className="mt-5" >
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

                <div className="md:flex w-10/12 justify-between mb-24">
                    {categorysection.slice(2, 5).map((categorylabel, i) => (

                        <div key={i} className="mt-5">
                            <input
                                type="checkbox"
                                id={categorylabel.value}
                                name="vehicle1"
                                value="Bike"
                                onChange={(event) => onChange(event, categorylabel)}
                            />
                            <label   >{categorylabel} </label>
                        </div>
                        


                    ))}

                </div>

               
            </div>





            <div className="flex justify-around mx-auto w-8/12    ">

            <button className="bg-blue-900 border-2 px-10 lg:w-4/12 mt-10  py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around text-xl  transition ease-out duration-500 " onClick={moveOn}>
            <h3 className="font-bold  text-xl  " >   Next Step </h3>
            <ChevronRightIcon className=" h-5 w-5 ml-3 mt-1 font-bold text-3xl " />


        </button>
            </div>
        </div>






    )
}

export default Step6
