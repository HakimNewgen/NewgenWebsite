import Image from 'next/image'
import IoDocumentsSharp from 'react-icons/io'
import FaPencilAlt from 'react-icons/fa'
import FaTools from 'react-icons/fa'
import IoRocketSharp from 'react-icons/io'
import GrUpdate from 'react-icons/gr'

function Mycycle() {
    return (
        <div  >
           <ul className="text-center" >
             <li className="inline-block">
               <IoDocumentsSharp className="m-28 " />
               
             </li>
             <li className="inline-block  w-52 ">
             <FaPencilAlt  />
               
             </li>
             <li className="inline-block w-52">
              <FaTools  />
               
             </li>
             <li className="inline-block w-52">
              <IoRocketSharp  />
               
             </li>


             <li className="inline-block w-52">
              <GrUpdate />
               
             </li>

           </ul>
            
        </div>
    )
}

export default Mycycle


