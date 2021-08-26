import Image  from "next/image"

function Tools({icon , title}) {
    return (
        <div>
           
            <div className="grid place-items-center     w-64   h-64  p-9  ">
                <Image src={icon} height={100} width={100} alt="" />
                <h3 className="  text-white text-xl font-semibold">{title}</h3>
            </div>
            
        </div>
    )
}

export default Tools
