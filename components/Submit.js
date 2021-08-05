import React from "react";
import Link from "next/link";
const Submit = ({ navigation }) => {
    const { go } = navigation;
    return (
        <div className="grid place-items-center p-32 ">
            

            <h3 className="text-4xl font-bold text-blue-900 text-center mb-20 " >Merci Pour vos réponse  vous recevez votre estimation par mail </h3>
            <div className="flex w-6/12 justify-around" >
                <Link href="/">
                    <button  className="border-2 border-blue-900 px-4  py-2 text-blue-900 font-bold  rounded-xl   ">Browse Website</button>
                </Link>

               
                <button onClick={() => go("step1")} className="bg-blue-900 border-2 px-10  py-2 text-white  mr-5 rounded-xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900">Get New Devis</button>
            </div>
        </div>
    );
};

export default Submit;