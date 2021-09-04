import Banner from "../components/Banner";
import About from "../components/About";
import Values from "../components/Values";
import Service from "../components/Service";
import Slider from "../components/Slider";
import Partner from "../components/Partner";
import Client from "../components/Client";
import Blog from "../components/Blog";
import Latest from "../components/Latest";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';
import Navbar from "../components/Navbar";
import {HiOutlineChatAlt} from 'react-icons/hi'
import Head from 'next/head'

export default function Home() {
  return (
    <div  className=" mx-auto ">
    <Head>
    <title>Newgen Intelligence</title>
    
      
    
    
    <link rel="icon" href="https://i.ibb.co/YZv3X6F/1613491158332.jpg" />
  </Head>
    

     <Navbar  />

     
      <Banner source="https://i.ibb.co/5WR8Nnm/3-D-earth-graphic-symbolizing-global-trade-vector-illustration.jpg" text="NEW VISION " text1="NEW FUTURE" font={" lg:text-6xl text-4xl"} size="cover" color={"text-white"} height="lg:h-xxxl" clip="banner" />

     
    
      <div id="values">
             <Values />
             
      
      </div>

      
  
      
       

     
   
            
              <br />
      <br />
         <div id="service">
         <Service />
         </div>
      
        <Slider />
        <Partner />
        
        <div className="" id="blogs">
        <Blog/>
          
        </div>
        <br />

        <Latest />
     
     

      <Footer/>

     
    </div>
  )
}
