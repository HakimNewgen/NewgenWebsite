import Navbar from "../components/Navbar";
import MultiStep from "../components/MultiStep";
import Banner from "../components/Banner";
import Form from "../components/Form";
import Head from 'next/head'

function devis() {
    return (
        <div>
        <Head>
    <title>Newgen Intelligence</title>
    <link rel="icon" href="https://i.ibb.co/YZv3X6F/1613491158332.jpg" />
  </Head>
        <div className=" bg-center bg-no-repeat   w-screen  z-0 bg-opacity-0 mx-auto text-center  "
          style={{ background: `url("https://i.ibb.co/V3GBNh0/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-1258-523.jpg") `, backgroundSize: `cover`, backgroundRepeat: 'no-repeat' , height:'500px' }}>

          <Navbar  />

          

          <div className="mx-auto  w-6/12">
            <h1 className={`text-4xl text-white text-center mt-24 font-bold mx-auto  z-40`} > Trouver une offre qui repond le plus à vos besoins </h1>
          </div>
          
          





       

        </div>
         
          <div className=" grid  place-items-center   p-5  relative bottom-44 mt-24   w-11/12 mx-auto  h-screen ">
                <Form service="web" />
          </div>
          
            
        </div>
    )
}

export default devis
