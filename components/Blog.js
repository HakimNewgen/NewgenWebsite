import { useEffect, useState } from "react"

import Image from 'next/image'
import Link  from 'next/link'

import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
import BlogCard from './BlogCard'
import axios from 'axios'

function Blog() {


    const [articles, setArticles] = useState([])

    

    useEffect(() => {
        const loadArticles = () => {
            axios.get('https://newgen-admin.herokuapp.com/articles/data').then((res) => {
               
               // console.log(res.data[0].title);
                const mydata = [];
                res.data.forEach((doc) => mydata.push(doc));
                console.log(mydata)
               
                setArticles(mydata)
                 console.log(articles)


            })
        }

        loadArticles()
    }, [])

    console.log(articles)


    
    return (
        <div className={`  w-10/12 mx-auto mt-44  `}>

            <h3 className="font-bold text-blue-900 text-5xl  mt-7 mb-20 mx-auto w-9/12  " >Nos Blogs</h3>
            

            

              <div className={` lg:flex mx-auto ml-14 w-full `}>
                {
                    articles.slice(0,2).map((article)=>(
                        <Link href={`/blogs/${article._id}`} key={article._id} >

                            <div className="w-full">

                                <BlogCard name="shadow-lg grid mt-16 mr-14 group   w-10/12  cursor-pointer rounded-2xl" id={article._id} title={article.title} description={article.description} image={article.image} />
                              </div>

                        </Link>

                    ))
                    }
                    

              

             
                
            
            </div>


            <div className="lg:flex mx-auto ml-14 w-full mt-16 ">


                {
                    articles.slice(2, 5).map((article) => (
                        <Link href={`/blogs/${article._id}`}  key={article._id}>

                            <div className=" w-full">

                                <BlogCard n name="shadow-lg grid mt-16  mr-14 group   w-10/12  cursor-pointer rounded-2xl" id={article._id} title={article.title} description={article.description} image={article.image} />
                            </div>

                        </Link>

                    ))
                    }

               
              
               
            </div>

            
            
        </div>
    )
}

export default Blog
