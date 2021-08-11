import React from "react";
import axios from 'axios'



const Review = ({ setForm, formData, navigation }) => {
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
    } = formData;
    const { go } = navigation;



    const sendData = ()=>{
        axios(
            {
                url: "https://newgen-admin.herokuapp.com/answers/client/save",
                method: "POST",
                data: formData
            }
        ).then((res) => {
            console.log('Data has been sent', res)
            go("submit")
        }).catch((e) => {
            console.log('Internal server Error' , e)
        })
        
    }

   
    return (
        <div className="grid place-items-center mx-auto w-10/12  p-36 ">
            <h3 className="text-4xl font-bold text-blue-900 text-center mb-20" >One Step Close</h3>
            <div className=" hidden">
                <h4>
                    Name
                    <button onClick={() => go("names")}>Edit</button>
                </h4>
                <div>
                    {" "}
                    First name: {`${firstName}`},
                    <br />
                    Last Name: {`${lastName}`},
                </div>
                <div>Nick Name: {`${nickName}`}</div>
                <h4>
                    Address
                    <button onClick={() => go("address")}>Edit</button>
                </h4>
                <div>
                    Address: {`${address}`},
                    <br />
                    City: {` ${city}`},
                    <br />
                    State: {`${state}`},
                    <br />
                    ZIP: {`${zip}`}
                </div>
                <h4>
                    Contact
                    <button onClick={() => go("contact")}>Edit</button>
                </h4>
                <div>
                    Phone: {`${phone}`},
                    <br />
                    E-mail: {`${email}`}
                </div>
            </div>
           
            
            <div className=" md:w-7/12 w-10/12 mx-auto">
                <button onClick={sendData} className="bg-blue-900 border-2 px-10  mx-auto w-full py-2 text-white  mr-5 rounded-xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900" >Envoyer votre demande</button>
            </div>
        </div>
    );
};

export default Review;
