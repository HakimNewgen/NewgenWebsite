import Contact from "./Contact";
import Map from "./Map";

function Latest() {
    return (
        <div>
          {  /*<h3 className="font-bold text-blue-900 text-5xl mb-20 mx-auto w-9/12 mt-32" >Latest of Newgen Intelligence</h3>

            <div className="lg:flex w-9/12 mx-auto  justify-between mb-10">
                <div className="flex cursor-pointer">
                    <div className="grid h-16 w-16 border-gray-400 border-2 place-items-center">
                        <h1 className="font-bold text-gray-400 p-1 text-xl">Aug</h1>
                        <h2 className="font-bold text-gray-400  text-xl">16</h2>

                    </div>
                    <div className="ml-5">
                        <h3 className="font-medium text-blue-800 text-xl " >Business Insight and Analytics Event</h3>
                        <p className="">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed</p>
                    </div>
                  
                  
                </div>

                <hr className=" flex w-full lg:hidden mx-auto   border-gray-400 mt-16 mb-24 " />

             

                <div className="flex cursor-pointer">
                    <div className="grid h-16 w-16 border-gray-400 border-2 place-items-center">
                        <h1 className="font-bold text-gray-400 p-1 text-xl">Aug</h1>
                        <h2 className="font-bold text-gray-400  text-xl">16</h2>

                    </div>
                    <div className="ml-5">
                        <h3 className="font-medium text-blue-800 text-xl" >Business Insight and Analytics Event</h3>
                        <p className="">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed</p>
                    </div>


                </div>

                <hr className=" flex w-full lg:hidden mx-auto   border-gray-400 mt-16 mb-24 " />
               
            </div>

    */}
            <div className="lg:flex  w-10/12 mx-auto lg:justify-between">
               <div className=" w-5/12  mr-44 mb-20">
                    <Map />
               </div>
                
                
    <div className="">
                    <Contact />
                    </div>

            </div>

           

        </div>
    )
}

export default Latest
