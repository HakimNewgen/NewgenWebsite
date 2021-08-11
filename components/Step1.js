

import { useState } from 'react';
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'


import Multiselect from 'multiselect-react-dropdown';
import Fade from 'react-reveal/Fade';
import { IoArrowForwardCircleOutline} from 'react-icons/io5';
const Step1 = ({ setForm, formData, navigation , service }) => {
    const [type, settype] = useState("")

    const { previous, next } = navigation;
  

    const options = [{ name: 'Site monopage / One Page', id: 1 },
    { name: 'Site Vitrine', id: 2 },
    { name: 'Site E-commerce ', id: 3 },
  
    ]

    const [selected, setSelected] = useState(options);


    const seedata = (data) => {
          console.log(data)
      
           settype(JSON.stringify(data))

            console.log(data)
          

            console.log(type)
          
            console.log(formData)

        
        
        

    }

    const moveOn =()=>{
        console.log(type)
        formData.type = type
        if(type){
            next()
        }else{
            alert('choisir au moins une options')
        }
    }


 

    const [bg1, setbg1] = useState("")
    const [bg2, setbg2] = useState("")

    const [txt1, settext1] = useState("text-gray-500")
    const [txt2, settext2] = useState("text-gray-500")
    const changeColor1 = () => {
        setbg1('bg-blue-900')
        settext1('text-white')
        setbg2('')
        settext2('text-gray-500')
        settype("Native")
        formData.service="Application Mobile"


    }

    const changeColor2 = () => {
        setbg2('bg-blue-900')
        settext2('text-white')
        setbg1('')
        settext1('text-gray-500')
        settype("Hybrid")
        formData.service = "Application Mobile"
        

    }

    const checkdata =()=>{
        console.log(formData)
    }
    return (
        <div className=" bg-gray-50 h-full  ">


          
             
       {service=="web" ?(
           <>
               <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                   <h3 className="font-bold text-white text-4xl mr-1 " >1/7</h3>
               </div>

              
                    <div className=" flex text-lg lg:text-3xl text-blue-900  ">

                       
                        <h3 className="  font-extrabold w-5/12  mx-auto" > De quel type est votre site ?</h3>
               <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />

                        
              </div>



               <div className="  w-10/12 flex mx-auto  justify-around mb-20 relative  top-14">

                   <Fade bottom delay={500}>
                       <div className="  mb-52 lg:mb-16 mt-5 w-full " >
                                <div className="w-full  rounded-lg">


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
                       </div>
                   </Fade>





               </div>

             
           </>

       ):(
          <>
                        <div className=" bg-blue-900 mx-auto relative bottom-10 grid place-items-center  " style={{ height: '100px', width: '100px', borderRadius: '50%' }} >
                        <h3 className="font-bold text-white text-4xl mr-1 " >1/7</h3>
                    </div>

                       


                        <div className=" flex text-lg lg:text-3xl text-blue-900  ">

                       
                        <h3 className="  font-extrabold w-5/12  mx-auto" > Quel est le type de votre application ?</h3>
               <IoArrowForwardCircleOutline onClick={moveOn}  className=" text-blue-600 hover:text-blue-900 text-5xl mb-5 mr-5 cursor-pointer " />

                        
              </div>
                        <div className="  w-10/12 flex mx-auto  justify-around   relative  top-10">



                            <div className="flex justify-around w-full mb-44 ">

                                <Fade duration={1000} bottom  >
                                    <div className={` w-44 h-44  rounded-3xl ${bg1} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor1} >

                                        <h3 className={` ${txt1} text-xl font-bold  group-hover:text-white `}>Native</h3>

                                    </div>
                                </Fade>


                                <Fade duration={1000} bottom delay={600} >
                                    <div className={` w-44 h-44  rounded-3xl ${bg2} shadow-lg grid place-items-center cursor-pointer  group hover:bg-blue-900 transition ease-out duration-500 `} onClick={changeColor2}>
                                        <h3 className={` ${txt2} text-xl font-bold  group-hover:text-white `} > Hybrid </h3>
                                    </div>

                                </Fade>




                            </div>

                        </div>

                      
                  
          </>
       )
           
       }
        </div>
    );
};

export default Step1;
