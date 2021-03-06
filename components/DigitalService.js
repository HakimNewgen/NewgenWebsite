import Bounce from 'react-reveal/Bounce';
import Image  from 'next/image';
function DigitalService({icon  , title , text}) {
    return (
        <div>
            <div className="grid place-items-center mx-auto  ">
               

                <div className="flex w-10/12">
                  <Bounce bottom duration={2000}>
                        <Image src={`${icon}`} className="w-16 h-16"  height={300} width={300} />
                  </Bounce>
                   
                    <div className="">
                        <h5 className="text-blue-900 font-bold text-xl m">{title}</h5>
                        <p className="w-full text-gray-400 mt-8 text-sm mb-28"> {text}</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default DigitalService
