import Image from "next/image";

import styles from "../styles/Team.module.scss";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';
function TeamCard({desc , post,name , image , face , linkind}) {
    return (
         
            <div className={styles.container}>
                <div className={styles.row}>
                    <div >
                        <div className={styles.team}>
                            <div className={styles.photo}>
                                <Image src={image}   height={100} width={100} alt='Libby' />
                            </div>

                            <div className={styles.profile_txt}>
                                <h1 className={styles.title}>{name}</h1>
                                <h1 className="text-gray text-lg  font-semibold ">{post}</h1>

                                 <div className="  px-5 hidden lg:block ">
                                <span className={styles.position}>{desc}</span>
                                   
                                 </div>
                            </div>
                            <ul className={styles.social_icons}>
                                <li>   <a href={face} ><RiFacebookFill className="w-6 h-6" /></a>  </li>
                                
                                <li> <a href={linkind}><RiLinkedinFill className="w-5  h-5" /></a> </li>

                            </ul>
                        </div>
                    </div>

                </div>
          
          </div>
           

        
    )
}

export default TeamCard
