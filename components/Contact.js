import * as emailjs from "emailjs-com";
import { useState } from "react";


function Contact() {
    const [values, setValues] = useState({
        firstname: "",
        secondname: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value });
        console.log(values)
    };

    const isFormValid = () => {
        if (!values.firstname || !values.secondname || !values.email || !values.message) {
            return false;
        } else {
            return true;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_j28hqai",
                "#myForm",
                "user_ZzKTg071wBZR3080wmbeW"
            )
            .then(
                (result) => {
                    console.log(result.text + "Works");
                    alert("Votre Message est Envoyé , Merci !")
                },
                (error) => {
                    console.log(error.text + "Not Works");
                }
            );
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            //message of error in the screen, maybe sweet alerts
            console.log("falta algo");
        } else {
            sendEmail(e);
        }
        
    };
    return (
        <div>
            <div className="container mx-auto    border border-blue-900 rounded-lg bg-white">
                <div className="p-5 space-y-5 shadow-xl">
                    <h4 className="text-center text-3xl">Contacter Nous</h4>

                    <form onSubmit={handleSubmit} id="myForm">
                        <div className="grid grid-cols-2 gap-5">
                            <input
                                type="text"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-900"
                                placeholder="Nom"
                                id="firstname"
                                name="firstname"
                               
                                value={values.firstname}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-900"
                                placeholder="Prénom"
                                id="secondname"
                                name="secondname"

                                value={values.secondname}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-900 col-span-2"
                                placeholder="Email"
                                id="email"
                                name="email"

                                value={values.email}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-900 col-span-2"
                                placeholder="Mobile"
                                id="phone"
                                name="phone"

                                value={values.phone}
                                onChange={handleChange}
                            />
                            <textarea
                                cols="10"
                                rows="5"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-900 col-span-2"
                                placeholder="Votre Message..."
                                 id="message"
                                 name="message"
                                 onChange={handleChange}
                            ></textarea>
                        </div>
                       
                        <button
                            className="focus:outline-none mt-5 cursor-pointer bg-blue-900 px-4 py-2 text-white font-bold w-full"
                            type="submit"
                            onClick={handleSubmit}
                        //   onClick={alert("Commande Envoyer , Merci pour votre Visite")}
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
