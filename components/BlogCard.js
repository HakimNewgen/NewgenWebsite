
import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

function BlogCard({name , title , description  , image}) {
    return (
        <div className={name}>
            <div className=" h-72 w-full rounded-t-2xl  " style={{ background: `url(http://localhost:5000/public/uploads/images/${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

            <h5 className="font-bold text-2xl group-hover:group-hover:text-blue-900 p-5  ">{title}</h5>

            <p className=" p-5  ">{description}</p>

            <br />
            <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:group-hover:text-blue-900 font-bold  rounded-lg ">Lire plus
                <ChevronRightIcon className="w-5 ml-3 mt-1" />
            </button>

        </div>
    )
}

export default BlogCard
