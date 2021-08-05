import { useState  , useEffect} from "react";

import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";
import Multiselect from 'multiselect-react-dropdown';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import MultiSelect from './MultiSelect'
import Fade from 'react-reveal/Fade';

import styles from "../styles/Form.module.scss";
import { set } from "lodash";

const Step3 = ({ setForm, formData, navigation , service }) => {
   

    const { previous, next } = navigation;

    const [counter, setcounter] = useState(0)
    const [secteur, setSecteur] = useState("")
    const [rentabilite, setRentabilite] = useState("")

    const [selected, setSelected] = useState(options);


    useEffect(() => {
        const test = () => {
            console.log(formData)
        }
        test()

    }, [])


    const seedata = (data) => {

        setSecteur(JSON.stringify(data))

        console.log(data)


        console.log(secteur)

        console.log(formData)





    }

 

    const [bg1, setbg1] = useState("")
    const [bg2, setbg2] = useState("")
    const [bg3, setbg3] = useState("")
    const [bg4, setbg4] = useState("")
    const [txt1, settext1] = useState("text-gray-500")
    const [txt2, settext2] = useState("text-gray-500")
    const [txt3, settext3] = useState("text-gray-500")

    const [txt4, settext4] = useState("text-gray-500")
    const changeColor1 = () => {
        setbg1('bg-blue-900')
        settext1('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        setbg4('')
        settext4('text-gray-500')
        setRentabilite('Gratuite avec Pub')


    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        setbg3('')
        settext3('text-gray-500')
        setbg4('')
        settext4('text-gray-500')
        setRentabilite('Payante')

    }

    const changeColor3 = () => {
        setbg3('bg-blue-900')
        settext3('text-white')
        setbg2('')
        settext2('text-gray-500')
        setbg1('')
        settext1('text-gray-500')
        setbg4('')
        settext4('text-gray-500')
        setRentabilite('Achat in App')
    }

    const changeColor4 = () => {
        setbg4('bg-blue-900')
        settext4('text-white')
        setbg3('')
        settext3('text-gray-500')
        setbg2('')
        settext2('text-gray-500')
        setbg1('')
        settext1('text-gray-500')
        setRentabilite('Autres')
    }



    const options = [{ name: 'Agroalimentaire', id: 1 },
        { name: 'Banque', id: 2 },
        { name: 'Bois', id: 3 },
        { name: 'Carton ', id: 4 },
        { name: 'Imprimerie ', id: 5 },
        { name: 'Commerce ', id: 6 },
        { name: 'Négoce ', id: 7 },
        { name: 'Distribution ', id: 8 },
        { name: 'Informatique', id: 9 },
        { name: 'Télécoms ', id: 10 },
        { name: 'Machineset équipements  ', id: 11 },
        { name: 'Logistique ', id: 12 },
        { name: 'Transports', id: 13 },
        { name: 'Autres ', id: 14 },
        
    ]


    const inc=()=>{
        setcounter(counter+1)
    }

    const dec = () => {
        if(counter==0){
            setcounter(0)
        }else{
            setcounter(counter-1)
        }
    }



    const moveOn = () => {
        console.log(secteur)
        formData.secteur = secteur
        formData.rentabilite = rentabilite
        if (secteur || rentabilite) {
            next()
        } else {
            alert('choisir au moins une options')
        }
    }


    const moveIn = () => {
        console.log(secteur)
        formData.secteur = secteur
        formData.rentabilite = rentabilite
        if (secteur || rentabilite) {
            next()
        } else {
            alert('choisir au moins une options')
        }
    }


    return (
        <div className=" bg-gray-50 h-full  grid place-items-center ">


         {service == "web"?(
                <>
                    <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                        <h3 className="font-bold text-white text-4xl mr-1 " >3/7</h3>
                    </div>

                    <h3 className="lg:text-3xl text-lg text-blue-900    font-extrabold w-6/12  mx-auto" > Quel est votre secteur activité ?</h3>



                    <div className="  w-10/12 flex mx-auto  justify-around  relative  top-14">
                        <Fade bottom duration={1000} delay={500}>
                            <div className="mb-16 mt-5 h-96 w-full"   >
                                <Multiselect
                                    options={options} // Options to display in the dropdown
                                    // Preselected value to persist in dropdown
                                    style={{
                                        chips: {
                                            'font-size': '20px',
                                            'padding': '10px',

                                        },
                                        multiselectContainer: {
                                            color: 'grey',
                                            'height': '30px'
                                        },
                                        searchBox: {
                                            border: 'none',
                                            'border-bottom': '2px solid blue',
                                            'border-radius': '1px',
                                            'width': '100%',

                                        },

                                    }}
                                    displayValue="name"



                                    value={selected}




                                    labelledBy="Select"

                                    onSelect={seedata}
                                    // Property name to display in the dropdown options

                                    placeholder="Choisir type de votre site"
                                />


                            </div>
                        </Fade>


                    </div>






                    <div className="flex justify-around mx-auto w-8/12 relative bottom-20  ">

                        <button className="bg-blue-900 border-2 px-10  lg:w-4/12  lg:py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around transition ease-out duration-500    " onClick={moveOn}>
                            
                            <h3 className="font-bold  text-xl transition ease-out duration-500    " >   Next Step </h3>
                            <ChevronRightIcon className=" h-5 w-5 ml-3 mt-1 font-bold text-3xl " />


                        </button>
                    </div>
                </>

         ):(
              <>
                        <div className=" bg-blue-900 mx-auto relative bottom-20 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                            <h3 className="font-bold text-white text-4xl mr-1 " >3/7</h3>
                        </div>

                        <h3 className="text-3xl text-blue-900  relative bottom-20   font-extrabold w-8/12  mx-auto" >  Comment  se rémunère votre application    ?</h3>



                        <div className="  w-10/12 flex mx-auto  justify-around  ">



                            <div className="flex justify-around w-full relative bottom-20  ">

                                <Fade duration={1000} bottom  >
                                    <div className={` w-44 h-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor1} >

                                        <h3 className={` ${txt1} text-xl font-bold  group-hover:text-white `}>gratuite  <br /> avec pub</h3>

                                    </div>
                                </Fade>


                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                                        <h3 className={` ${txt2} text-xl font-bold  group-hover:text-white `} >  payante</h3>
                                    </div>

                                </Fade>

                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg3} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor3}>
                                        <h3 className={` ${txt3} text-xl font-bold  text-center group-hover:text-white `} > Achats <br /> ‘in-app’
                                        </h3>
                                    </div>

                                </Fade>

                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg4} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor4}>
                                        <h3 className={` ${txt4} text-xl font-bold  text-center group-hover:text-white `} > Autres
                                        </h3>
                                    </div>

                                </Fade>




                            </div>

                        </div>

                        <div className="flex justify-around mx-auto w-8/12 mt-5   ">

                            <button className="bg-blue-900 border-2 px-10 w-4/12  py-2 text-white  mr-5  rounded-3xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 flex justify-around transition ease-out duration-500"  onClick={moveOn} >
                                <h3 className="font-bold  text-xl " >   Next Step </h3>
                                <ChevronRightIcon className=" h-5 w-5 ml-3 mt-1 font-bold text-3xl " />


                            </button>
                        </div>
                     
              
              </>
         )
            
         }


           
        </div>
    );
};

export default Step3;
