import React , {useEffect} from "react";
import { useForm, useStep } from "react-hooks-helper";
import Navbar from "../components/Navbar";




import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
    { id: "step4" },
    { id: "step5" },
    { id: "step6" },
    { id: "step7" },
    { id: "review" },
    { id: "submit" }
];



const Devis = ({ service , name , email}) => {


    
    const defaultData = {
        service: service,
        name: name,
        email: email,
        type: "",
        design: "",
        rentabilite: "",
        login: "",
        secteur: "",
        nbrpage: "",
        infosupp1: "",
        infosupp2: "",
        typedev: ""
    };
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

   

    const props = { formData, setForm, navigation , service };


    switch (id) {
        case "step1":
            return <Step1 {...props } />;
        case "step2":
            return <Step2 {...props} />;
        case "step3":
            return <Step3 {...props} />;

        case "step4":
            return <Step4 {...props} />;

        case "step5":
            return <Step5 {...props} />;


        case "step6":
            return <Step6 {...props} />;

        case "step7":
            return <Step7 {...props} />;
        case "review":
            return <Review {...props} />;

        case "submit":
            return <Submit {...props} />;
        default:
            return null;
    }
};

export default Devis;
