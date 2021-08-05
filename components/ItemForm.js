import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
    <div className="w-6/12 mx-auto mb-20" >
        {type === "text" ? (
            <>
                <label>{label}</label>
                <input type={type} required className="  border-b-2  border-gray px-4 py-1  w-full mx-auto focus:outline-none focus:border-blue-900  mt-5 mb-5" {...otherProps} />
            </>
        ) : (
            <>
                <label />
                <input type={type} {...otherProps} />
                {label}
            </>
        )}
    </div>
);

export default ItemForm;