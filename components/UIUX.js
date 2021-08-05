import Image from 'next/image'



function UIUX({Tcolor , Bcolor , side , ring, text , icon , title}) {
    console.log(icon)
    const url = icon 
    return (
        <div className="grid place-items-center mt-32" >

            <div className={`lg:w-5/12 w-10/12 lg:mx-auto rounded-xl p-10 h-80  bg-gradient-to-b ${Tcolor}  ${Bcolor}  relative ${side}  ring-8 ${ring} p-5 `}>
               <div className="grid place-items-center ">
                    <div className="bg-white w-24 rounded-full p-5 ">
                        <Image src={icon} height={100} width={100} alt="" />

                    </div>
                    <h3 className="text-xl text-center text-white mx-auto mt-10 mb-10 underline " >{title}</h3>
                    <p className=" hidden xl:block lg:text-center text-white mx-auto">{text} </p>
               </div>
            </div>
            
        </div>
    )
}

export default UIUX
