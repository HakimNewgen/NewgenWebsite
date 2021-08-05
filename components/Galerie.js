import styles from "../styles/Galerie.module.css";

import Image from "next/image";
function Galerie() {
    
    return (
        <div>
            <div className={styles.support_scrollsnap}></div>

            <div className={styles.scroll_container}>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between mx-auto w-10/12">
                    <div className="hidden lg:block">
                            <h1 className="text-white text-6xl font-extrabold " >Lunch  </h1>
                            <h1 className=" bg-white p-5 text-black  mix-blend-screen text-6xl font-extrabold rounded-lg " >Your Business</h1>
                    </div>
                       
                        <Image className="rounded-xl   " src="https://i.ibb.co/RhPX9zD/6b68a6e3036d7dbd1c0b5a9c50e4da12.webp" height={400} width={500} alt="" />
                    </div>
                </div>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between mx-auto w-10/12">
                        <div className="hidden lg:block">
                            <h1 className="text-white text-6xl font-extrabold " >Space for </h1>
                            <h2 className=" bg-white p-5 text-black  mix-blend-screen text-6xl font-extrabold rounded-lg"> Entertainment</h2>
                        </div>

                        <Image className="rounded-xl  ml-60 h h-3/4 " src="https://i.ibb.co/QQBQPms/preview.png" height={500} width={700} alt="" />
                    </div>
                </div>
                <div className={styles.scroll_area}>
                    <div className="flex justify-between mx-auto w-10/12">
                        <div className="hidden lg:block">
                            <h1 className="text-white text-6xl font-extrabold " >Start  </h1>
                            <h1 className=" bg-white p-5 text-black  mix-blend-screen text-6xl font-extrabold rounded-lg " >Making Impact</h1>
                          

                            
                        </div>

                        <Image className="rounded-xl  ml-60 " src="https://i.ibb.co/r7KZDCH/e5250ba1f1381b72db01a946a7dce325.webp" height={400} width={600} alt="" />
                    </div>
                </div>
                </div>
               
           
            
        </div>
    )
}

export default Galerie
