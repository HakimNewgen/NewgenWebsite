import styles from "../styles/Galerie.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {useState} from 'react'

import Image from 'next/image'


function Technolgie() {
    const [traceWeb, setTraceweb] = useState("border-r-2")
    const [tracemobile, setTracembile] = useState("")

    return (
        <div>
            <Tabs className={styles.Tabs} selected={1}>
                <TabList className={styles.TabList }>
                    <Tab className={`${traceWeb} border-blue-900`} onClick={() => {
                        setTraceweb("border-r-2")
                        setTracembile("")
                    }}>
                        <button className={styles.Button} >
                           
                        Web</button>
                    </Tab>
                    <Tab onClick={()=>{
                        setTraceweb("")
                        setTracembile("border-r-2")
                    }} className={`${tracemobile} border-blue-900`}>
                        <button className={styles.Button} >Mobile</button>
                    </Tab>
                   
                </TabList>

                <div className="grid place-items-center mx-auto">
                    <TabPanel>
                        <Image src="https://i.ibb.co/rGfH0VD/preview.png" height={500} width={1200} alt="" />
                    </TabPanel>

                    <TabPanel className="relative top-14">
                        <Image src="https://i.ibb.co/Bqb9Htg/Mobile-Techno.png" height={500} width={1200} alt="" />
                    </TabPanel>

                   
                </div>

                
            </Tabs>
            
        </div>
    )
}

export default Technolgie
