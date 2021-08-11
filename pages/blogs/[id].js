import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from 'next/image'

import Markdown from 'react-markdown'
import styles from "../../styles/Blog.module.css";

export const getStaticPaths = async () => {
    const res = await fetch('https://newgen-admin.herokuapp.com/articles/data');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(article => {
        return {
            params: { id: article._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://newgen-admin.herokuapp.com/articles/data/${id}`);
    const data = await res.json();

    return {
        props: { article : data }
    }
}


const Details = ({article})=>{

    
    return(
        
            <div className="">
                <Navbar background="blue-900" />

                <div className="grid place-items-center  w-8/12 mx-auto">
                    <h1 className="text-blue-900 font-bold mt-40 text-5xl text-center" > {article.title} </h1>
                    <p className="mt-7 text-gray-400 text-md">{new Date(article.createdAt).toLocaleDateString()}</p>
                    <p className="mt-7 mb-28 text-gray-500 text-md">{article.subject} | By {article.author} </p>
                <Image src={`https://newgen-admin.herokuapp.com/public/uploads/images/${article.image}`} width={1000} height={700} />




                <div className={styles.blog_content}>
                  <br/> <br/>
                    <Markdown >
                   { article.markdown}
                    </Markdown>
              </div>
                    
              

                </div>

                <Footer />

            </div>
      
      
    )
}

export default Details;
