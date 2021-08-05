import React from "react";

const states = [
    ["NSW", "New South Wales"],
    ["VIC", "Victoria"],
    ["WA", "Western Australia"]
];

const StateDrop = ({ label, ...others }) => (
    <div className="w-6/12 mx-auto mb-20">
        <label>{label}</label>
        
    </div>
      
 
);

export default StateDrop;
